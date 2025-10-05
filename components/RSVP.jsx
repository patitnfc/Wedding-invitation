export default function RSVP({ text }) {
  return (
    <section id="rsvp" className="max-w-4xl mx-auto my-10 p-6 rounded-2xl bg-white/80 shadow-sm">
      <h3 className="font-heading text-2xl mb-3">RSVP</h3>
      <p className="mb-4">{text}</p>
      <form onSubmit={(e)=>{ e.preventDefault(); alert('Thanks! We received your RSVP — this is demo behaviour.'); }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input name="name" required placeholder="Your name" className="p-2 border rounded-md" />
          <input name="guests" placeholder="No. of guests" type="number" className="p-2 border rounded-md" />
          <select name="attend" className="p-2 border rounded-md">
            <option value="yes">Attending</option>
            <option value="no">Not Attending</option>
            <option value="maybe">Maybe</option>
          </select>
        </div>
        <button className="mt-4 px-4 py-2 bg-accent-200 rounded-md">Submit RSVP</button>
      </form>
    </section>
  );
}
