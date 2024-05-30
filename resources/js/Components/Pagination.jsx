import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
  if (!links) return null;
  return (
    <nav className="text-center mt-4">
      {links.map((link) => (
        <Link
          preserveScroll
          href={link.url || ""}
          key={link.label}
          className={
            "inline-block py-2 px-3 rounded-lg text-gray-900 text-xs " +
            (link.active ? "bg-blue-900 " : " ") +
            (!link.url
              ? "!text-gray-500 cursor-not-allowed "
              : "hover:bg-blue-500")
          }
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
}