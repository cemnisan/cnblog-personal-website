import Image from 'next/image';

function ProfilePicture(){
    return(
        <Image
        className="rounded-circle"
        src="https://res.cloudinary.com/cnblog/image/upload/v1619814820/blog/cemnisan_kopyas%C4%B1_podwo1.jpg"
        alt="Cem Nisan"
        width={40}
        height={40}
      />
    )
}

export default ProfilePicture