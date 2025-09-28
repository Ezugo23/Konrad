export default function wavingHands({ size = 24, color = "currentColour" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke="none"
    >
      {/* Waving Hand */}
      <path d="M12 2c-1 0-2 1-2 2v7.5l-1-1V5c0-1-1-2-2-2s-2 1-2 2v8.5l-1-1V5c0-1-1-2-2-2s-2 1-2 2v11c0 1 1 2 2 2h3v-7l2 2v5h2v-6l2 2v4h2v-7l2 2v5h2v-9c0-1-1-2-2-2s-2 1-2 2v3l-1-1V4c0-1-1-2-2-2z" />
    </svg>
  );
}