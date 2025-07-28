function useRedirect() {

  function redirect(url: string, openInNewWindow: boolean): void {
    if (openInNewWindow) {
      window.open(url,'_blank')
    } else {
      window.open(url, url)
    }
  }

  return {redirect}
}

export default useRedirect;
