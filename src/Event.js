function handleClick() {
    return (
        alert('Are you clicked me!')
    );
    
    
}
export default function Button() {
  

  return (
    <div class="button1">
        <button onClick={handleClick} className="bg-white text-blue-600 rounded border-5 ring ...  p-2">
      Click me
    </button>
     <form onSubmit={() => alert('Submitting!')}>
    <label for="name">Name:</label><br />
    <input  className="border-2 border-black" type="text" id="name" name="name" required /><br /><br />

    <label for="email">Email:</label><br />
    <input className="border-2 border-black"  type="email" id="email" name="email" required /><br /><br />

    <label for="message">Message:</label><br />
    <textarea className="border-2 border-black"  id="message" name="message" rows="5" required></textarea><br /><br />

    <input className="border-2 border-black"  type="submit" value="Submit" />
  </form>

  </div>
    
  );
}