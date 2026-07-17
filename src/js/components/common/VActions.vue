<template>
  <div v-click-outside="() => (this.active = false)" class="flex items-center">
    <div class="relative flex items-center">
      <div
        ref="button"
        :class="{ active }"
        class="relative flex cursor-pointer hover:bg-gray-200 w-5 h-5 items-center justify-center rounded-lg"
        @click.prevent="active = !active"
      >
        <svg v-if="showActionIcon" width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.00065 2.83341C8.46089 2.83341 8.83398 2.46032 8.83398 2.00008C8.83398 1.53984 8.46089 1.16675 8.00065 1.16675C7.54041 1.16675 7.16732 1.53984 7.16732 2.00008C7.16732 2.46032 7.54041 2.83341 8.00065 2.83341Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.834 2.83341C14.2942 2.83341 14.6673 2.46032 14.6673 2.00008C14.6673 1.53984 14.2942 1.16675 13.834 1.16675C13.3737 1.16675 13.0007 1.53984 13.0007 2.00008C13.0007 2.46032 13.3737 2.83341 13.834 2.83341Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.16732 2.83341C2.62755 2.83341 3.00065 2.46032 3.00065 2.00008C3.00065 1.53984 2.62755 1.16675 2.16732 1.16675C1.70708 1.16675 1.33398 1.53984 1.33398 2.00008C1.33398 2.46032 1.70708 2.83341 2.16732 2.83341Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <slot name="button" />
      </div>
      <transition name="fade">
        <div
          v-if="active"
          class="absolute right-0 top-full z-20 w-[200px] rounded bg-white shadow-xl ring-1 ring-neutral-100"
          :class="classes"
        >
          <slot name="dropdown" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import clickOutside from "../../helpers/ClickOutSide";

export default {
  name: "VActions",
  directives: {
    clickOutside,
  },
  props: {
    classes: {
      type: String,
      default: "",
    },
    showActionIcon: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    active(val) {
      if (val) {
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>