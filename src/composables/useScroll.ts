function useScroll() {

  function scrollToElementById(sectionId: string): void {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return {scrollToElementById}
}

export default useScroll;
