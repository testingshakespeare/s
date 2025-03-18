import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
          <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the site or a third-party to recognize you and make your next visit easier and more useful to you.</p>
          <p className="mt-4">Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How Sunfinity Uses Cookies</h2>
          <p>When you use and access our site, we may place a number of cookie files in your web browser. We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li><strong>Essential cookies:</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website or use a shopping cart.</li>
            <li><strong>Analytical/performance cookies:</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</li>
            <li><strong>Functionality cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</li>
            <li><strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
          <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of our site, deliver advertisements on and through the site, and so on.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Your Choices Regarding Cookies</h2>
          <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Where Can You Find More Information About Cookies</h2>
          <p>You can learn more about cookies and the following third-party websites:</p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li>AllAboutCookies: <a href="http://www.allaboutcookies.org/" className="text-sunfinity-600 hover:text-sunfinity-700">http://www.allaboutcookies.org/</a></li>
            <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/" className="text-sunfinity-600 hover:text-sunfinity-700">http://www.networkadvertising.org/</a></li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Our Cookie Policy</h2>
          <p>Sunfinity may change this Cookie Policy from time to time. We will notify you of significant changes by posting the updated Policy on our Site or by sending you an email when we are required to do so by applicable law. Your continued use of the Site after any changes will constitute your acceptance of such change.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about our Cookie Policy, please contact us at:</p>
          <p className="mt-4">
            <strong>Sunfinity Solar Energy</strong><br />
            Email: privacy@sunfinity-solar.com<br />
            Phone: 571-525-0019
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy; 