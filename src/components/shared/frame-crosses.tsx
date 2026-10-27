export function FrameCrosses({
  edges = "all",
}: {
  edges?: "all" | "top" | "bottom"
}) {
  return (
    <>
      {edges !== "bottom" && (
        <>
          <span className="frame-cross left-0 top-0" aria-hidden="true" />
          <span className="frame-cross right-0 top-0" aria-hidden="true" />
        </>
      )}
      {edges !== "top" && (
        <>
          <span className="frame-cross bottom-0 left-0" aria-hidden="true" />
          <span className="frame-cross bottom-0 right-0" aria-hidden="true" />
        </>
      )}
    </>
  )
}
