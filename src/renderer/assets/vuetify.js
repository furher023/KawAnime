import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import theme from '@/stylus/theme.js'
import * as directives from 'vuetify/lib/directives'

import Vuetify, {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VToolbar,
  VToolbarTitle,
  VContent,
  VContainer,
  VLayout,
  VFlex,
  VSelect,
  VMenu,
  VList,
  VListGroup,
  VListItem,
  VListItemContent,
  VListItemAction,
  VListItemTitle,
  VListItemAvatar,
  VNavigationDrawer,
  VSystemBar,
  VSubheader,
  VFooter,
  VBtn,
  VIcon,
  VSnackbar,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VDialog,
  VTextField,
  VCheckbox,
  VProgressCircular,
  VRadioGroup,
  VRadio,
  VTabs,
  VTabsItems,
  VTab,
  VTabItem,
  VSwitch,
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelContent,
  VExpansionPanelHeader,
  VDivider,
  VTooltip,
  VDataTable,
  VDatePicker,
  VChip,
  VBadge,
  VSpeedDial,
  VSlider,
  VPagination,
  VTextarea,
  VImg,
  VCombobox,
  VHover,
  VSheet,
  VSparkline,
  VProgressLinear,
  VAutocomplete,
  VSpacer,
  VFadeTransition,
  VScaleTransition,
  VExpandTransition
} from 'vuetify/lib'

export default (Vue) => {
  Vue.use(Vuetify, {
    directives,
    components: {
      VApp,
      VAppBar,
      VAppBarNavIcon,
      VToolbar,
      VToolbarTitle,
      VContent,
      VContainer,
      VLayout,
      VFlex,
      VSelect,
      VMenu,
      VList,
      VListGroup,
      VListItem,
      VListItemContent,
      VListItemAction,
      VListItemTitle,
      VListItemAvatar,
      VNavigationDrawer,
      VSystemBar,
      VSubheader,
      VFooter,
      VBtn,
      VIcon,
      VSnackbar,
      VCard,
      VCardActions,
      VCardText,
      VCardTitle,
      VDialog,
      VTextField,
      VCheckbox,
      VProgressCircular,
      VRadioGroup,
      VRadio,
      VTabs,
      VTabsItems,
      VTab,
      VTabItem,
      VSwitch,
      VExpansionPanels,
      VExpansionPanel,
      VExpansionPanelContent,
      VExpansionPanelHeader,
      VDivider,
      VTooltip,
      VDataTable,
      VDatePicker,
      VChip,
      VBadge,
      VSpeedDial,
      VSlider,
      VPagination,
      VTextarea,
      VImg,
      VCombobox,
      VHover,
      VSheet,
      VSparkline,
      VProgressLinear,
      VAutocomplete,
      VSpacer,
      VFadeTransition,
      VScaleTransition,
      VExpandTransition
    }
  })

  return new Vuetify({
    theme,
    icons: {
      iconfont: 'md'
    }
  })
}
