<template>
  <div class="grid space-y-2" :class="field?.class">
    <input-wrapper field="full_address" class="space-y-0 [&_label]:mx-0 [&_div.w-full]:pt-0">
      <input
          :id="'search_address_' + field.id"
          type="text"
          :disabled="isManual"
          class="border-1 border-solid border-gray-300 rounded-lg bg-white"
          :value="fullAddress"
          @input="resetAddressInput"
      />
    </input-wrapper>
    <label class="flex cursor-pointer items-center space-y-1">
      <v-toggle v-model="isManual" :ring="false" />
      <span class="text-xs inline-block">Manual Address</span>
    </label>
    <div class="relative space-y-2" v-if="isManual">
      <input-wrapper is-vertical field="address" label-text="Address" class="w-full">
        <input
            type="text"
            class="border-1 border-solid border-gray-300 rounded-lg bg-white"
            v-model="form.address"
            placeholder="Address"
        />
      </input-wrapper>
      <div class="flex flex-row space-x-3">
        <div class="basis-1/3">
          <input-wrapper is-vertical field="city" label-text="Suburb" class="w-full">
            <input
                type="text"
                class="border-1 border-solid border-gray-300 rounded-lg bg-white w-full"
                v-model="form.city"
                placeholder="Suburb"
            />
          </input-wrapper>
        </div>
        <div class="basis-1/3">
          <input-wrapper is-vertical field="state" label-text="State" class="w-full">
            <input
                v-model="form.state"
                type="text"
                placeholder="State"
                class="border-1 border-solid border-gray-300 rounded-lg bg-white w-full"
            />
          </input-wrapper>
        </div>
        <div class="basis-1/3">
          <input-wrapper is-vertical field="postcode" label-text="Postcode" class="w-full">
            <input
                type="text"
                class="border-1 border-solid border-gray-300 rounded-lg bg-white w-full"
                v-model="form.postcode"
                placeholder="Postcode"
            />
          </input-wrapper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputWrapper from "../common/InputWrapper.vue";
import VToggle from "../common/VToggle.vue";

export default {
  name: "VAddress",
  components: {InputWrapper, VToggle},
  props: {
    modelValue: {
      required: false,
    },
    field: {},
  },
  data() {
    return {
      form: {
        address: null,
        city: null,
        state: null,
        postcode: null,
        lat: null,
        lng: null,
      },
      isManual: false,
      copy: false,
    };
  },
  computed: {
    fullAddress() {
      return [this.form?.address, this.form?.city, this.form?.state, this.form?.postcode]
          .filter(Boolean)
          .join(", ");
    },
  },
  watch: {
    form: {
      handler(newValue) {
        if (Object.keys(newValue).length) {
          this.$emit("update:modelValue", {
            address: newValue?.address,
            city: newValue?.city,
            state: newValue?.state,
            postcode: newValue?.postcode,
            lat: newValue?.lat,
            lng: newValue?.lng,
          });
        }
      },
      deep: true,
    },
    isManual(newValue) {
      if (newValue && this.copy) {
        this.copy = false;
        this.form.reset();
      }
    },
  },
  methods: {
    loadGoogleMapsScript() {
      return new Promise((resolve, reject) => {
        if (document.getElementById("google-maps-script")) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.id = "google-maps-script";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${this.$googleMapsApiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    },
    initializeAutocomplete() {
      const autocomplete = new google.maps.places.Autocomplete(
          document.getElementById("search_address_" + this.field.id),
          {
            fields: ["address_components", "geometry"],
            strictBounds: false,
            types: ["address"],
          }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        this.form.lat = place.geometry.location?.lat();
        this.form.lng = place.geometry.location?.lng();
        const address = {};
        for (const component of place.address_components) {
          const componentType = component.types[0];
          switch (componentType) {
            case "street_number":
              address.streetNumber = component.long_name;
              break;
            case "route":
              address.streetName = component.long_name;
              break;
            case "locality":
              this.form.city = component.long_name;
              break;
            case "administrative_area_level_1":
              this.form.state = component.short_name;
              break;
            case "postal_code":
              this.form.postcode = component.long_name;
              break;
          }
        }
        this.form.address = "";
        if (address.streetNumber) {
          this.form.address = address.streetNumber + " ";
        }
        if (address.streetName) {
          this.form.address += address.streetName;
        }
      });
    },
    resetAddressInput(event) {
      const target = event.target;
      if (!target.value) {
        this.form.address = null;
        this.form.city = null;
        this.form.state = null;
        this.form.lat = null;
        this.form.lng = null;
        this.form.postcode = null;
        this.form.addressInput = "";
      }
    },
  },
  mounted() {
    this.loadGoogleMapsScript()
        .then(() => {
          this.initializeAutocomplete();
        })
        .catch((error) => {
          console.error("Failed to load Google Maps script: " + this.$googleMapsApiKey, error);
        });

    this.form = Object.keys(this.modelValue ?? []).length ? this.modelValue : this.form;
  },
};
</script>