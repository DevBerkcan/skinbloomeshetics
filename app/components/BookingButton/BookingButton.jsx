const BOOKING_URL = "https://skinbloombooking.gentlegroup.de/booking";

function BookingButton({
  className = "",
  title = "Termin online buchen",
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`appointment-btn booking-cta ${className}`.trim()}
      aria-label="Termin online bei Skinbloom buchen"
    >
      <span className="booking-cta__title">{title}</span>
    </a>
  );
}

export default BookingButton;
