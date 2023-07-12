import landing from '../assets/images/landing.png'
export default function LandingPage() {
  return <div className="flex flex-col ">

    <div className="flex items-center justify-around">
      <div className="flex gap-10 p-5 justify-center flex-col max-w-xl">
        <h1 className="text-7xl font-semibold text-primary ">Fresh and Fast,your food to go!</h1>

        <p className='text-lg'>By pre-ordering your meals, you're not only promoting a healthier lifestyle,but also crating a safer environment for your school community. Avoid crowds and enjoy nutritious meals hassle-free!</p>
       
        <button className="bg-primary text-white text-lg p-3 px-5 animate-bounce rounded-md shadow-lg shadow-primary w-fit">GET STARTED</button>
      </div>

      <div className='flex'>
        <img src={landing} alt="landing icon" className="w-[550px]" />
      </div>

    </div>
   
  </div>
}