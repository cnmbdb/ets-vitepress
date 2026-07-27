const HFZ_PARENT_ORIGINS = new Set([
  'https://hfz.pw',
  'https://www.hfz.pw',
  'http://127.0.0.1:8000',
  'http://localhost:8000'
])

function getHfzParentOrigin() {
  if (typeof window === 'undefined' || window.parent === window) return null

  try {
    const parentOrigin = new URL(document.referrer).origin
    return HFZ_PARENT_ORIGINS.has(parentOrigin) ? parentOrigin : null
  } catch {
    return null
  }
}

function notifyHfzParent(parentOrigin) {
  window.parent.postMessage(
    {
      type: 'hfz:iframe-route',
      app: 'ets',
      route: `${window.location.pathname}${window.location.search}${window.location.hash}`,
      title: document.title
    },
    parentOrigin
  )
}

export function installHfzIframeBridge(router) {
  const parentOrigin = getHfzParentOrigin()
  if (!parentOrigin) return

  const notify = () => notifyHfzParent(parentOrigin)
  const previousAfterRouteChange = router.onAfterRouteChange

  router.onAfterRouteChange = async (to) => {
    if (previousAfterRouteChange) await previousAfterRouteChange(to)
    notify()
  }

  window.addEventListener('hashchange', notify)
  window.addEventListener('message', (event) => {
    if (event.source !== window.parent || event.origin !== parentOrigin) return

    const data = event.data
    if (data && data.type === 'hfz:iframe-ready' && data.app === 'ets') {
      notify()
    }
  })
  notify()
}
