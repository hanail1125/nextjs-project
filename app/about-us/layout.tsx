export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <h6>&copy; Next JS is great!</h6>
    </div>
  )
}