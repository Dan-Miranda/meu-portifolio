export function scrollToSection(htmlId: string): void {
  const section = document.getElementById(htmlId)

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
