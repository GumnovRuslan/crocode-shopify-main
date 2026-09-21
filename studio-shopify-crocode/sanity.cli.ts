import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'k8culv98',
    dataset: 'production'
  },
  deployment: {
    appId: 'w5d6f76jxa81kvdkuauqful9',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
