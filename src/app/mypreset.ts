import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';

/**
 * HaargallerietPreset
 * Et lyst, moderne tema basert på Lara.
 * Du kan endre primary, accent, warn osv. til å matche salongens brand.
 */
export const MyPreset = definePreset(Lara, {
  semantic: {
    colorScheme: {
      light: {
        // Overflatefarger (bakgrunn, kort, paneler, etc.)
        surface: {
          0: '#ffffff', // Hovedbakgrunn
          50: '#f9f9f9',
          100: '#f3f3f3',
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

        // Hovedfargen for knapper, interaktive elementer
        primary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#1976d2', // F.eks. en blåtonet farge
          600: '#1e88e5',
          700: '#1565c0',
          800: '#0d47a1',
          900: '#0a3475',
        },

        // Gull-aktig accentfarge for fremheving (f.eks. i lenker, spesialknapper)
        accent: {
          50: '#f7efe2',
          100: '#ead4b4',
          200: '#e0bc8e',
          300: '#d7a768',
          400: '#cc9342',
          500: '#b88a3d', // gull-ish
          600: '#a27b36',
          700: '#8c6b2f',
          800: '#765c28',
          900: '#604d21',
        },

        // Varselsfarge (f.eks. i p-messages, p-toast)
        warn: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
        },

        // Tekstfarger
        text: {
          primary: '#212121',
          secondary: '#757575',
          disabled: '#bdbdbd',
        },
      },

      // Ikke definér noen 'dark' for kun lys modus
      // dark: { ... }  // FJERNET
    },

    // Overstyr spesifikke komponent-variabler
    component: {
      paginator: {
        // For eksempel bakgrunn på paginator
        background: '#ffffff',
      },
      datatable: {
        // For eksempel bakgrunn på radene i tabell
        rowBackground: '#ffffff',
      },
    },
  },
});
