import { RevealItem } from '../motion/RevealItem'

const webLinks = ['Shop', 'Contact Us', 'Book Online']
const socialLinks = ['Facebook', 'Instagram', 'Twitter']
const miscLinks = ['Facebook', 'SOCIAL', 'Instagram']

export function FooterSection() {
  return (
    <footer className="bg-[#0f0f0f] px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-8 sm:px-10 sm:pb-10 lg:px-20 lg:pb-10 lg:pt-[30px]">
      <div className="mx-auto flex max-w-[1446px] flex-col gap-8 lg:gap-[10px]">
        <div className="flex flex-col gap-10 pb-8 pt-6 sm:pt-8 lg:flex-row lg:items-center lg:gap-[10px] lg:pb-[60px] lg:pt-10">
          <RevealItem axis="y" className="w-full max-w-[319px]" delayMs={40} distance={18}>
            <div className="space-y-6 text-[18px] leading-none">
              <p className="text-[var(--color-title-left)]">WEB</p>
              {webLinks.map((item) => (
                <p className="text-white" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </RevealItem>

          <RevealItem axis="y" className="w-full max-w-[273px]" delayMs={110} distance={18}>
            <div className="space-y-6 text-[18px] leading-none">
              <p className="text-[var(--color-title-left)]">SOCIAL</p>
              {socialLinks.map((item) => (
                <p className="text-white" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </RevealItem>

          <div
            aria-hidden="true"
            className="hidden h-[186px] w-px bg-white/80 lg:block"
          />

          <RevealItem axis="y" className="w-full max-w-[237px] lg:px-10" delayMs={180} distance={18}>
            <div className="space-y-6 text-[18px] leading-none">
              {miscLinks.map((item, index) => (
                <p
                  className={index === 1 ? 'text-[var(--color-title-left)]' : 'text-white'}
                  key={`${item}-${index}`}
                >
                  {item}
                </p>
              ))}
            </div>
          </RevealItem>
        </div>

        <div aria-hidden="true" className="h-px w-full bg-white/80" />

        <RevealItem axis="y" delayMs={240} distance={12}>
          <p className="text-[12px] leading-none text-white">
            ©2023 SHED Barbershop LLC. All content is the property of SHED unless
            otherwise noted.
          </p>
        </RevealItem>
      </div>
    </footer>
  )
}
