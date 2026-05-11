import { motion } from "framer-motion";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import type { AuthModalProps } from "../../types/type";

const AuthModals = ({ isOpen, setIsOpen, setSignUpOpen, signUpOpen }: AuthModalProps) => {
  return (
    <div>
      {/* Sign In Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-xl bg-background shadow-lg overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute cursor-pointer right-4 top-4 text-[#9C948A] hover:text-[#2B2B2B] text-xl font-bold"
            >
              ✕
            </button>
            <SignInForm setIsOpen={setIsOpen} />
          </div>
        </motion.div>
      )}

      {/* Sign Up Modal */}
      {signUpOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-xl bg-background shadow-lg overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={() => setSignUpOpen(false)}
              className="absolute cursor-pointer right-4 top-4 text-[#9C948A] hover:text-[#2B2B2B] text-xl font-bold"
            >
              ✕
            </button>
            <SignUpForm setSignUpOpen={setSignUpOpen} />  
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AuthModals;