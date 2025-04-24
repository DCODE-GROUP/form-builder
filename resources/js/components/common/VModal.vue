<template>
  <div :class="{ '-open': isOpen }" class="v-modal">
    <transition name="fade">
      <div
        class="fixed left-1/2 top-1/2 z-50 flex max-h-screen -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-xl border-tertiary-500 bg-white"
        v-if="isOpen"
      >
        <slot>
          <div class="relative max-h-[720px] overflow-y-auto" :class="{ 'overflow-y-visible': !scrollable }">
            <component
              v-if="componentName"
              :is="componentName"
              v-bind="componentData"
              @confirm="confirm"
              @closeModal="close"
            ></component>
            <div v-else class="p-smSpace">
              <div v-html="componentData" class="py-mdSpace"></div>
              <div class="flex justify-center space-x-xsSpace pt-xsSpace">
                <a @click="close" class="btn-secondary btn-sm" v-text="cancelButton"></a>
                <a @click.prevent="confirm" class="btn-primary btn-sm" v-text="confirmButton"></a>
              </div>
            </div>
          </div>
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  inject: ["bus"],
  data() {
    return {
      isOpen: false,
      componentName: null,
      componentData: {},
      cancelTitle: null,
      confirmTitle: null,
      scrollable: false,
      isAsyncCallBack: false,
      callback: () => {},
      cancelCallback: () => {},
    };
  },
  created() {
    this.bus.$on("openModal", (payload) => {
      this.open();
      this.componentName = payload.componentName;
      this.componentData = payload.componentData;
      this.cancelTitle = payload?.cancelTitle;
      this.confirmTitle = payload?.confirmTitle;
      this.scrollable = payload?.scrollable === undefined ? true : payload.scrollable;
      this.isAsyncCallback = payload?.isAsyncCallback ?? false;
      this.callback = payload.callback;
      this.cancelCallback = payload.cancelCallback;
    });
    this.bus.$on("closeModal", () => {
      this.close();
    });
  },
  computed: {
    cancelButton() {
      return this.cancelTitle ? this.cancelTitle : this.$t("generic.buttons.cancel");
    },
    confirmButton() {
      return this.confirmTitle ? this.confirmTitle : this.$t("generic.buttons.confirm");
    },
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      if (this.cancelCallback) {
        this.cancelCallback();
      }
      this.isOpen = false;
    },
    async confirm(data = null) {
      if (this.isAsyncCallback && this.callback) {
        await this.callback(data);
      } else if (this.callback) {
        this.callback(data);
      }
      this.isOpen = false;
    },
  },
};
</script>
<style scoped>
.v-modal {
  position: fixed;
  pointer-events: none;
  z-index: 50;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: transparent;
  transition: background-color 0.3s linear;

  &.-open {
    pointer-events: all;
    background-color: rgba(50, 50, 50, 0.3);
  }
}
</style>
