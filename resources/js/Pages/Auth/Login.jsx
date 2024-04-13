import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title="Log in" />
            <div className="flex w-screen flex-wrap text-slate-800">
            <div class="w-1/2 h-screen hidden lg:block">
  <img src="/images/one.jpg" alt="Placeholder Image" className="object-cover w-full h-full" />
  <div className="absolute inset-0 flex flex-col items-le justify-center p-8 mb-16 gap-3">
                        <p className="text-white text-5xl font-blod ">BookNow.com </p>
                        <p className="text-white text-2xl font-bold ">
                        Streamline event creation, simplify ticket purchases. 
                        </p>
                        <p className="text-white text-2xl font-bold ">
                            Your ultimate platform for seamless event management.
                        </p>
                       
                    </div>
</div>
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
         
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold text-blue-900  md:text-left md:leading-tight justify-center flex">BOOKONW</p>
         
            <p href="#" className="whitespace-nowrap font-semibold text-blue-700 justify-center flex">Log in </p>
          
       
    
          {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}


            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
                <div className='flex'>

                <button className="w-full mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
            <img className="mr-2 h-5" src="/images/-9jfz8JJkYKu0yDYmD5WM.svg" alt /> Log in with Google
          </button>
                </div>
            </form>
            <div className='flex justify-center'>
            <p class="mt-6 text-center font-medium md:text-left">
        New here?
        <a href={route('register')} class="whitespace-nowrap font-semibold text-blue-700">Sing Up</a>
      </p>
            </div>
        </div>
      </div>
    </div>
  
            
        </>
    );
}
