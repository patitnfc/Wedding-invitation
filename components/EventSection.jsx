import { motion } from "framer-motion";

// helper to create "Add to Calendar" google link
function googleCalendarLink(event) {
  const start = new Date(event.date).toISOString().replace(/-|:|\.\d\d\d/g,"");
  // one hour default end
  const endDate = new Date(new Date(event.date).getTime() + (60*60*1000));
  const end = endDate.toISOString().replace(/-|:|\.\d\d\d/g,"");
  const text = encodeURIComponent(event.title + " - " + event.venue);
  const details = encodeURIComponent("Join us!");
  const location = encodeURIComponent(event.venue);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}&sf=true&output=xml`;
}

export default function EventSection({ event, idx }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * idx }}
      className="w-full"
    >
      <div className="max-w-4xl mx-auto my-6 p-6 rounded-2xl" style={{ background: event.accent || "#fff" }}>
        <h3 className="font-heading text-2xl">{event.title}</h3>
        <div className="text-sm mt-2">{new Date(event.date).toLocaleString()}</div>
        <div className="mt-2 text-sm">{event.venue}</div>
        <div className="mt-4 flex gap-3">
          <a className="px-4 py-2 border rounded-md text-sm" href={event.mapsLink} target="_blank" rel="noreferrer">View Location</a>
          <a className="px-4 py-2 bg-black/90 text-white rounded-md text-sm" href={googleCalendarLink(event)} target="_blank" rel="noreferrer">Add to Calendar</a>
        </div>
      </div>
    </motion.section>
  );
}
