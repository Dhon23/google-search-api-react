import "../styles/loadingAnimation.css"

export default function LoadingAnimation() {
  return (
    <div className="loading-animation" data-testid="loading-animation">
      <span className="loader"></span>
    </div>
  );
}
