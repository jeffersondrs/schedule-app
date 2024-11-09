export default function SignIn({
  updateItemAction,
}: {
  updateItemAction: (formData: FormData) => void;
}) {


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateItemAction(new FormData());
      }}
    >
      <button type="submit" className="w-full text-xs text-gray-50">
        Sign In with Google
      </button>
    </form>
  );
}
