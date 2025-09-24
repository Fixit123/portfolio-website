export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted/50 to-muted/30 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">{"Ahmed Olayinka "}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Full-Stack Web Developer passionate about creating exceptional digital experiences with modern
              technologies and user-centered design.
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Ahmed Olayinka. All rights reserved. Built with Next.js and deployed on Vercel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
