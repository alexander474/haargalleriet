import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';

export const MyPreset = definePreset(Lara, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f5f5f5',
          100: '#eeeeee',
          200: '#e0e0e0',
          300: '#cccccc',
          400: '#b3b3b3',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          950: '#000000',
        },
        primary: {
          500: '#1976d2',
        },
        accent: {
          500: '#e91e63',
        },
        warn: {
          500: '#f44336',
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
          disabled: '#BDBDBD',
        },
      },
      // Ingen dark-blokk
    },
    component: {
      // Overstyr p-datatable og p-paginator bakgrunn om nødvendig
      paginator: {
        background: '#ffffff',
      },
      datatable: {
        rowBackground: '#ffffff',
      },
    },
  },
});
