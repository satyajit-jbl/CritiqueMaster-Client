{/* Newsletter Signup */}
<div className="bg-darkLight py-6 px-4 rounded-md mb-6">
  <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
  <p className="text-sm mb-4">Get the latest reviews and updates delivered straight to your inbox.</p>
  <form className="flex flex-col sm:flex-row gap-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="px-4 py-2 rounded-md text-dark w-full sm:w-auto flex-1"
      required
    />
    <button
      type="submit"
      className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-200"
    >
      Subscribe
    </button>
  </form>
</div>
