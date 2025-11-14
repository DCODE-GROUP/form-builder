<template>
  <div class="v-datepicker" :class="modelValue?.class">
    <input type="hidden" :name="modelValue.name" :id="modelValue.name" :value="date"/>
    <date-picker
        v-model:value="date"
        :format="formatTimeString"
        value-type="format"
        :type="formatTimeString === 'hh:mm' ? 'time' : 'date'"
        class="!w-full h-[40px]"
        :placeholder="modelValue.placeholder"
        v-if="editable"
    />
    <p v-else v-text="modelValue.value"></p>
    <p v-if="modelValue?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ modelValue.hint }}</p>
  </div>
</template>

<script>
import DatePicker from "vue-datepicker-next";
import 'vue-datepicker-next/index.css';
import BaseField from "../mixins/BaseField";

export default {
  name: "VDatepicker",
  components: {DatePicker},
  inject: ["possibleFormValues", "getFormValue"],
  mixins: [BaseField],
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      date: null,
    };
  },
  created() {
    this.date = this.formatValue();
  },
  watch: {
    date() {
      Object.assign(this.modelValue, {value: this.date})
    },
  },
  computed: {
    formatTimeString() {
      if (this.modelValue?.sub_type === 'time') {
        return `hh:mm`;
      }

      if (typeof this.modelValue.value === 'string') {
        let isTimeFormat = false;
        [':', 'am', 'pm', 'AM', 'PM'].forEach((s) => {
          if (this.modelValue.value.includes(s)) {
            isTimeFormat = true;
          }
        })

        if (this.modelValue.value.length <= 5 && this.modelValue.value.includes('.')) {
          isTimeFormat = true;
        }

        if (isTimeFormat) {
          return `hh:mm`;
        }
      }

      return 'DD/MM/YY';
    },
  },
  methods: {
    formatValue() {
      const value = this.modelValue.value ?? this.getFormValue(this.possibleFormValues, this.modelValue?.defined_key);
      if (this.formatTimeString === 'hh:mm') {
        return this.detectAndFormatToHHMM(value);
      } else {
        return this.detectAndFormatToDDMMYY(value);
      }
    },
    /**
     * detectAndFormatToHHMM("7.57")   -> "07:57"
     * detectAndFormatToHHMM("7:5")    -> "07:05"
     * detectAndFormatToHHMM("07:57")  -> "07:57"
     * detectAndFormatToHHMM("07.57")  -> "07:57"
     * detectAndFormatToHHMM("0757")   -> "07:57"
     * detectAndFormatToHHMM("757")    -> "07:57"
     * detectAndFormatToHHMM("7")      -> "07:00"
     * detectAndFormatToHHMM("12am")   -> "00:00"
     * detectAndFormatToHHMM("12:30pm")-> "12:30"
     * detectAndFormatToHHMM("1pm")    -> "13:00"
     * detectAndFormatToHHMM("23:59")  -> "23:59"
     * detectAndFormatToHHMM("24:00")  -> null
     * @param input
     * @returns {string|null}
     */
    detectAndFormatToHHMM(input) {
      if (!input || typeof input !== 'string') return null;
      let s = input.trim();

      // Extract and remove trailing AM/PM (accepts "am", "pm", "AM", "PM", with optional trailing dot)
      const ampmMatch = s.match(/(am|pm)\.?$/i);
      let ampm = null;
      if (ampmMatch) {
        ampm = ampmMatch[1].toLowerCase();
        s = s.slice(0, ampmMatch.index).trim();
      }

      // Try patterns:
      // 1) hh:mm or h.mm or h-mm or "hh:mm:ss" (seconds ignored)
      let m = s.match(/^(\d{1,2})\s*[:.\-]\s*(\d{1,2})(?:\s*[:.\-]\s*\d{1,2})?$/);
      let hourPart, minutePart;

      if (m) {
        hourPart = m[1];
        minutePart = m[2];
      } else {
        // 2) Compact 3 or 4 digits: "757" -> 7:57, "0757" -> 07:57
        m = s.match(/^(\d{3,4})$/);
        if (m) {
          const raw = m[1];
          if (raw.length === 3) {
            hourPart = raw.slice(0, 1);
            minutePart = raw.slice(1);
          } else {
            hourPart = raw.slice(0, 2);
            minutePart = raw.slice(2);
          }
        } else {
          // 3) Single hour like "7" -> 07:00
          m = s.match(/^(\d{1,2})$/);
          if (m) {
            hourPart = m[1];
            minutePart = '0';
          } else {
            // 4) Other separators/formats: try splitting non-digit boundaries and take first two numeric parts
            const parts = s.split(/[^0-9]+/).filter(Boolean);
            if (parts.length >= 2) {
              hourPart = parts[0];
              minutePart = parts[1];
            } else {
              return null;
            }
          }
        }
      }

      const hour = parseInt(hourPart, 10);
      const minute = parseInt(minutePart, 10);
      if (Number.isNaN(hour) || Number.isNaN(minute)) return null;
      if (minute < 0 || minute > 59) return null;

      let hh = hour;

      if (ampm) {
        // hour must be 1..12 for AM/PM notation
        if (hh < 1 || hh > 12) return null;
        if (ampm === 'pm') {
          if (hh !== 12) hh += 12;
        } else { // am
          if (hh === 12) hh = 0;
        }
      } else {
        // 24-hour input expected
        if (hh < 0 || hh > 23) return null;
      }

      const pad = n => String(n).padStart(2, '0');
      return `${pad(hh)}:${pad(minute)}`;
    },

    detectAndFormatToDDMMYY(input) {
      if (!input || typeof input !== 'string') return null;

      // normalize separators to '/'
      const normalized = input.trim().replace(/[^\d]/g, '/').replace(/\/+/g, '/');
      const parts = normalized.split('/').filter(Boolean);
      if (parts.length < 3) return null;

      let [p1, p2, p3] = parts;
      p3 = p3.slice(0, 4); // keep up to 4 digits for year

      const n1 = parseInt(p1, 10);
      const n2 = parseInt(p2, 10);
      if (Number.isNaN(n1) || Number.isNaN(n2)) return null;

      // parse year
      let yearFull;
      if (/^\d{4}$/.test(p3)) {
        yearFull = parseInt(p3, 10);
      } else if (/^\d{1,2}$/.test(p3)) {
        yearFull = 2000 + parseInt(p3, 10); // map 2-digit to 20xx
      } else {
        const y = parseInt(p3, 10);
        if (Number.isNaN(y)) return null;
        yearFull = y < 100 ? 2000 + y : y;
      }

      const isValidDate = (d, m, y) => {
        if (m < 1 || m > 12 || d < 1 || d > 31) return false;
        const dt = new Date(y, m - 1, d);
        return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d;
      }

      if (n1 > 31 || n2 > 31) return null;

      let day = null, month = null;

      // If one part >12 it's the day; otherwise prefer day-first
      if (n1 > 12 && n2 <= 12) {
        day = n1;
        month = n2;
      } else if (n2 > 12 && n1 <= 12) {
        day = n2;
        month = n1;
      } else {
        // try day-first then month-first
        if (isValidDate(n1, n2, yearFull)) {
          day = n1;
          month = n2;
        } else if (isValidDate(n2, n1, yearFull)) {
          day = n2;
          month = n1;
        } else {
          return null;
        }
      }

      if (!isValidDate(day, month, yearFull)) return null;

      const dd = String(day).padStart(2, '0');
      const mm = String(month).padStart(2, '0');
      const yy = String(yearFull).slice(-2);

      return `${dd}/${mm}/${yy}`;
    }
  }
};
</script>

