import { Fragment, useCallback, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { classNames } from '@/utils/general'

export default function Dropdown({ tags, update }: { tags: string[], update: any } ) {
    const [currentTag, setCurrentTag] = useState(tags ? tags[0] : 'Latest')
    const updateTag = useCallback((tag: string) => {
        setCurrentTag(tag)
        update(tag)
    }, [update])
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-violet-500">
          {currentTag}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {
                tags.map((tag) => (
                    <div key={tag} className="py-1">
                        <Menu.Item>
                        {({ active }: any) => (
                            <a
                            href="#"
                            onClick={() => updateTag(tag)}
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                                {tag}
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                ))
            }
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
