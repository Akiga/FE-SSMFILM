import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { getCategories, getCountries } from "../../services/movieService";

export default function Navbar({ mobile = false }) {
  const [openMenu, setOpenMenu] = useState(null);

  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cate, country] = await Promise.all([
          getCategories(),
          getCountries(),
        ]);

        setCategories(cate);
        setCountries(country);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);


  const navClass = ({ isActive }) =>
    `
    relative text-sm font-medium transition-all duration-300 
    ${
      isActive
        ? "text-blue-500"
        : "text-gray-300 hover:text-white"
    }
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:bg-blue-500
    after:transition-all
    after:duration-300
    ${
      isActive
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }
    `;


  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };


  const Dropdown = ({ type, title, data, path }) => {
    const open = openMenu === type;

    return (
      <div
        className="relative"
        onMouseEnter={
          !mobile ? () => setOpenMenu(type) : undefined
        }
        onMouseLeave={
          !mobile ? () => setOpenMenu(null) : undefined
        }
      >

        <button
          onClick={
            mobile
              ? () => toggleMenu(type)
              : undefined
          }
          className="
            flex items-center gap-1
            text-sm font-medium
            text-gray-300
            hover:text-white
            transition
            cursor-pointer
          "
        >
          {title}

          <ChevronDown
            size={18}
            className={`
              transition-transform duration-300
              ${open ? "rotate-180" : ""}
            `}
          />
        </button>


        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${
              mobile
                ? `
                  ${
                    open
                      ? "max-h-[70vh] opacity-100 mt-3 overflow-y-auto"
                      : "max-h-0 opacity-0"
                  }
                `
                : `
                  absolute
                  top-full
                  left-0
                  w-[650px]

                  ${
                    open
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-3 invisible"
                  }
                `
            }

            rounded-xl
            bg-slate-800
            shadow-xl
          `}
        >

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-3
              p-5
            "
          >

            {data?.data?.items?.map((item)=>(
              <NavLink
                key={item._id}
                to={`${path}/${item.slug}`}
                onClick={() => mobile && setOpenMenu(null)}
                className="
                  rounded-lg
                  px-3
                  py-2
                  text-gray-300
                  hover:bg-blue-600
                  hover:text-white
                  transition
                "
              >
                {item.name}
              </NavLink>
            ))}

          </div>

        </div>

      </div>
    );
  };


  return (
    <nav
      className={
        mobile
          ? `
            flex
            flex-col
            items-start
            gap-5
            p-5
            w-full
          `
          :
          `
            flex
            items-center
            gap-8
          `
      }
    >

      <NavLink to="/" className={navClass}>
        Trang chủ
      </NavLink>


      <NavLink to="/list/phim-le" className={navClass}>
        Phim lẻ
      </NavLink>


      <NavLink to="/list/phim-bo" className={navClass}>
        Phim bộ
      </NavLink>


      <NavLink to="/list/hoat-hinh" className={navClass}>
        Hoạt hình
      </NavLink>


      <NavLink to="/list/tv-shows" className={navClass}>
        TV Shows
      </NavLink>


      <Dropdown
        type="category"
        title="Thể loại"
        data={categories}
        path="/category"
      />


      <Dropdown
        type="country"
        title="Quốc gia"
        data={countries}
        path="/country"
      />

    </nav>
  );
}