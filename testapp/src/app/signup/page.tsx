import Link from 'next/link'

const SignUp = () => {
    return (
        <main className="bg-pageBg bg-cover bg-center bg-no-repeat">
        <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">
          <aside className="bg-white w-full max-w-md rounded-xl shadow-lg shadow-black">
          <h1 className="text-black px-6 text-4xl rounded-t-xl m-0 py-4 mt-10">Бүртгүүлэх хэсэг</h1>
          <form className="p-6">
            <input type="text" placeholder="Нэр эсвэл мэйл хаягаа оруулна уу?" className="bg-black bg-opacity-10 py-3 px-4 w-full text-black text-md font-light outline-none"></input>
            <input type="password" placeholder="Нууц үгээ оруулна уу?" className="bg-black bg-opacity-10 py-3 px-4 w-full text-black text-md font-light outline-none mt-3"></input>
            <input type="password" placeholder="Нууц үгээ оруулна уу?" className="bg-black bg-opacity-10 py-3 px-4 w-full text-black text-md font-light outline-none mt-3"></input>
            <input type="password" placeholder="Нууц үгээ оруулна уу?" className="bg-black bg-opacity-10 py-3 px-4 w-full text-black text-md font-light outline-none mt-3"></input>
            <input type="password" placeholder="Нууц үгээ оруулна уу?" className="bg-black bg-opacity-10 py-3 px-4 w-full text-black text-md font-light outline-none mt-3"></input>
            <div className="flex mt-5 justify-between items-center mb-5">
              <Link href="/" className="bg-green text-black font-medium py-2 px-8 transition hover:text-white">Буцах</Link>
              <button type="submit" className="bg-green text-black font-medium py-2 px-8 transition hover:text-white">Бүртгүүлэх</button>
            </div>
          </form>
  
          </aside>
        </div>
      </main>
    )
};

export default SignUp;