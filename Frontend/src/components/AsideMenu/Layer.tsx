import React from 'react'
import { mdiClose } from '@mdi/js'
import Icon from '../Icon'
import AsideMenuList from './List'
import { MenuAsideItem } from '../../interfaces'
import { useAppSelector } from '../../stores/hooks'

type Props = {
  menu: MenuAsideItem[]
  className?: string
  onAsideLgCloseClick: () => void
}

export default function AsideMenuLayer({ menu, className = '', ...props }: Props) {
  const darkMode = useAppSelector((state) => state.darkMode.isEnabled)

  const handleAsideLgCloseClick = (e: React.MouseEvent) => {
    e.preventDefault()
    props.onAsideLgCloseClick()
  }

  return (
    <aside
      className={`${className} border-4 rounded-2xl m-2 border-gray-300 zzz lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-[97vh] transition-position overflow-hidden`}
    >
      <div className={`aside lg:rounded-2xl flex-1 flex flex-col overflow-hidden`}>
        <div className={`aside-brand flex flex-row h-14 items-center justify-between`}>
          <div className="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
            <b className="font-bold text-xl">Monitering System</b>
          </div>
          <button
            className="hidden lg:inline-block xl:hidden p-3"
            onClick={handleAsideLgCloseClick}
          >
            <Icon path={mdiClose} />
          </button>
        </div>
        <div
          className={`flex-1 overflow-y-auto overflow-x-hidden ${
            darkMode ? 'aside-scrollbars-[slate]' : 'aside-scrollbars'
          }`}
        >
          <AsideMenuList menu={menu} />
        </div>
      </div>
    </aside>
  )
}
