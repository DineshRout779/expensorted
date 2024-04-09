const Dashboard = () => {
  return (
    <div className='container mx-auto max-w-[1080px] w-full'>
      <header className='flex justify-between items-center py-4'>
        <div>
          <p className='text-xs'>Welcome back</p>
          <h2 className='font-semibold text-xl'>Jane Doe</h2>
        </div>

        <div>
          <img
            className='rounded-full w-12 h-12'
            src='https://randomuser.me/api/portraits/women/39.jpg'
            loading='lazy'
            alt='Jane Doe'
          />
        </div>
      </header>

      <main>
        <section></section>
      </main>
    </div>
  );
};

export default Dashboard;
