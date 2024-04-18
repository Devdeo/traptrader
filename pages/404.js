import Link from 'next/link'
import Image from 'next/image'

function Page404(){
    return(
        <div className="landing has-background-grey">
            <br />
            <div className="columns is-centered">
                <div className="column is-7">
                    <Image 
                    src="/logo.png"
                    width={300}
                    height={300}
                    alt='dev'
                    />
                <p className='text is-size-1'><strong className='text has-text-white'>404</strong></p>
                <p className='text has-text-white'>Page Not Found!</p>
                <br />
                <Link href="/" className='button is-black'>Go To Homepage</Link>
                </div>
            </div>
        </div>
    )
}

export default Page404