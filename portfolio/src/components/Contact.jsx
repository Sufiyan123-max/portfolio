import React,{useState,useRef} from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import axios from 'axios'
const Contact = () => {
  const sectionRef = useRef(null);
  const contactCardsRef = useRef([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
console.log(formData);
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // Ensure loading state is set
  console.log(formData);
  try {
    const response = await axios.post('http://localhost:5000/contact', formData
    );

    const data = await response.json();

    if (response.ok) {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setStatus({ type: 'error', message: data.message || 'Failed to send message' });
    }
  } catch (error) {
    setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>As a skilled web developer with experience in React.js, the MERN stack, and full-stack development, I am actively seeking job opportunities where I can apply my technical expertise. I am eager to contribute to dynamic projects, grow within a collaborative team, and help build impactful web solutions.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:sifiyan100@gmail.com" className='hover:underline'>
                    sifiyan100@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+919905787612</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>sreet, city, pronice, country</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input  
                     type="text"
                     id="name"
                     value={formData.name}
                     onChange={handleInputChange}
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Name'/>
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input 
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" 
                     id="message"
                     value={formData.message}
                     onChange={handleInputChange}
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter You Message'/>
                </div>
                <button onClick={handleSubmit} className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact