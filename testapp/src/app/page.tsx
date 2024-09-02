import Link from 'next/link'

const LoginForm = () => {
  return (
    <main className="bg-pageBg">
      <div className="w-full h-screen flex justify-end items-center bg-black bg-opacity-25 px-40">
        <div className='bg-logo'></div>
        <aside className="bg-white w-full max-w-md rounded-xl shadow-lg shadow-black">
        <h1 className="text-black px-6 text-4xl rounded-t-xl m-0 py-4 mt-10">Нэвтрэх хэсэг</h1>
        <form className="p-6">
          <input type="text" placeholder="Нэр эсвэл мэйл хаягаа оруулна уу?" className="bg-black bg-opacity-10 py-3 px-4 w-full text-black text-md font-light outline-none"></input>
          <input type="password" placeholder="Нууц үгээ оруулна уу?" className="bg-black bg-opacity-10 py-3 px-4 w-full text-black text-md font-light outline-none mt-3"></input>
          
          <div className="flex items-center mt-3">
            <input type="checkbox" id="rememberMe"/>
            <label htmlFor="rememberMe" className="ml-2">Намайг сана</label>
          </div>
          
          <div className="mt-3">
            <a href="" className="text-blue opacity-75">Нууц үгээ мартсан уу?</a>
          </div>

          <div className="flex mt-5 justify-between items-center mb-5">
            <Link href="signup" className="bg-green text-black font-medium py-2 px-8 transition hover:text-white">Бүртгүүлэх</Link>
            <Link href="dashboard"><button type="submit" className="bg-green text-black font-medium py-2 px-8 transition hover:text-white">Нэвтрэх</button></Link>
          </div>
        </form>

        </aside>
      </div>
    </main>
  );
};

export default LoginForm;