export interface AuthModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setSignUpOpen: (value: boolean) => void;
  signUpOpen: boolean;
}


export interface SignInFormProps {
  setIsOpen: (value: boolean) => void
}

export interface SignUpFormProps {
  setSignUpOpen: (value: boolean) => void
}