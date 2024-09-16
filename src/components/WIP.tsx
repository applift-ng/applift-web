import Image from 'next/image'
export const WIP = () => {
    return (
      <div className='flex flex-row items-center mx-2'>
        <Image
        src="/WIPStar.png"
        height={20}
        width={40}
        alt={"Star"}
        ></Image>
        <span
        className="w-full text-black font-medium text-xl"
        >
          Work in progress
        </span>
      </div>
    )
}