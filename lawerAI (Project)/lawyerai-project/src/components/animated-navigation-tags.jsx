import { motion } from "framer-motion";
import { useState } from "react";

export function AnimatedNavigationTabs({ items }) {
  const [active, setActive] = useState(items[0]);
  const [isHover, setIsHover] = useState(null);
  
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button
              style={{
                color: active.id === item.id ? "rgb(255, 255, 255)" : "rgb(156, 163, 175)",
                transition: "color 0.3s"
              }}
              onClick={() => setActive(item)}
              onMouseEnter={() => setIsHover(item)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span style={{ position: "relative", zIndex: 10 }}>
                {item.tile}
              </span>
              
              {isHover?.id === item.id && (
                <motion.div
                  layoutId="hover-bg"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "6px",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              
              {active.id === item.id && (
                <motion.div
                  layoutId="active"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}