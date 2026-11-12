import { useEffect, useState } from "react";
import { FloatButton, Progress } from "antd";
// import { VerticalAlignTopOutlined  } from "@ant-design/icons";
import { CaretUpOutlined } from "@ant-design/icons";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, MessageCircle } from 'lucide-react';

import { MdPhone } from "react-icons/md";
import { MdChat } from "react-icons/md";




export default function ScrollProgressButton() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage = Math.min(
        100,
        Math.round((scrollTop / docHeight) * 100),
      );

      setProgress(percentage);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
      {/* Phone Button */}
      <a
        href="tel:+917760003670"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200  text-primary"
        title="Call us"
        aria-label="Call us"
      >
        {/* <Phone color="#003A80"  size={20} /> */}
        <MdPhone style={{ color: "#003A80", fontSize: "22px" }} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917760003670"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
        title="WhatsApp us"
        aria-label="WhatsApp us"
      >
        <FaWhatsapp style={{ color: "#003A80", fontSize: "22px" }} />
      </a>



      {/* WhatsApp Button */}
      {/* <a
      href="https://wa.me/917760003670" // 
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <FaWhatsapp size={30} color="white" />
    </a> */}

      {/* Scroll To Top */}
      {visible && (
        <div
          className="cursor-pointer"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <div className="relative flex items-center justify-center">
            <Progress
              type="circle"
              percent={progress}
              size={50}
              showInfo={false}
              strokeColor="#60A5FA"
              railColor="#F3F4F6"
            />

            <FloatButton
              icon={<CaretUpOutlined style={{ color: "#60A5FA" }} />}
              shape="circle"
              style={{
                position: "absolute",
                inset: "5px",
                width: "36px",
                height: "36px",
                boxShadow: "none",
                backgroundColor: "#ffffff",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
