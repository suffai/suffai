export default function applyIPhoneBackgroundStyles(): void {
  // Detect if the user agent string indicates an iPhone
  const userAgent: string = navigator.userAgent;
  const isIPhone: boolean = /iPhone|iPod/.test(userAgent);
  const isIPad: boolean = /iPad/.test(userAgent);

  if (isIPhone) {
    const firstSection = document.querySelector(
      ".main-section.first-section"
    ) as HTMLElement;
    if (firstSection) {
      firstSection.classList.add("iphone");
    }
  }
  if (isIPad) {
    const firstSection = document.querySelector(
      ".main-section.first-section"
    ) as HTMLElement;
    if (firstSection) {
      firstSection.classList.add("ipad");
    }
  }
}
