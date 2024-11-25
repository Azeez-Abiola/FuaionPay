import { motion } from 'framer-motion';
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', value: 30000 },
  { month: 'Feb', value: 40000 },
  { month: 'Mar', value: 35000 },
  { month: 'Apr', value: 45000 },
  { month: 'May', value: 42000 },
  { month: 'Jun', value: 58749 },
];

const partners = [
  { name: 'Visa', logo: '/visa.png' },
  { name: 'PayPal', logo: '/paypal.png' },
  { name: 'Cash App', logo: '/cashapp.png' },
  { name: 'Coinbase', logo: '/coinbase.png' },
  { name: 'Stripe', logo: '/stripe.png' },
];

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                Unlock Your Financial Freedom With Fusion Pay
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl">
                Embark On A Journey Where Seamless Transactions Meet Innovation. 
                Discover Payment Solutions On Our Platform Tailored To Empower 
                Businesses To Thrive In This Digital Economy.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="w-full sm:w-auto bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-600 transition-colors">
                  Get Started
                </button>
                <button className="w-full sm:w-auto bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                  Explore
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-4 md:p-6">
                <div className="mb-4">
                  <h3 className="text-sm text-gray-500">Total earnings</h3>
                  <p className="text-xl md:text-2xl font-bold">$58,749.00</p>
                  <p className="text-sm text-gray-500">6 Months</p>
                </div>
                <div className="h-48 md:h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6B7280', fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6B7280', fontSize: 12 }}
                        width={40}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#7C3AED"
                        strokeWidth={3}
                        dot={{ fill: '#7C3AED', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-purple-600 rounded-2xl p-4 md:p-8 text-center">
              <h3 className="text-white text-lg md:text-xl mb-4 md:mb-8">Join Over 10k Customers Nationwide</h3>
              <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8">
                {partners.map((partner) => (
                  <img
                    key={partner.name}
                    src={partner.logo}
                    alt={partner.name}
                    className="h-6 md:h-8 object-contain filter brightness-0 invert"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}