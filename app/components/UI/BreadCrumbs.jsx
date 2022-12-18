import _ from 'lodash';
import { Link } from '@remix-run/react';
export const BreadCrumbs = ({ pages, className }) => {
  const BreadCrumbItem = ({ children, path }) => {
    return (
      <Link
        to={path}
        className={`font-medium text-sm lg:text-xl cursor-pointer whitespace-nowrap `}>
        {children}
      </Link>
    );
  };

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className={`container flex flex-wrap justify-start gap-2 text-center ${className}`}>
        {pages.map((page, i) => {
          if (i === pages.length - 1)
            return <BreadCrumbItem path={page.path}>{_.capitalize(page.name)}</BreadCrumbItem>;
          return <BreadCrumbItem path={page.path}>{_.capitalize(page.name)} /</BreadCrumbItem>;
        })}
      </div>
    </div>
  );
};
export default BreadCrumbs;
