import Image from "next/image";
import Link from "next/link";

const WhatsAppButton = () => {
  return (
    <div className="btn-wa">
      <Link
        href="https://call.whatsapp.com/voice/P4Ctw9MfTvSBhf739nEJIF"
        target="_blank"
        passHref
      >
        <Image
          src="/assets/images/wa.png"
          alt="WhatsApp"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
