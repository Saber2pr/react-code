/*
 * @Author: saber2pr
 * @Date: 2019-04-05 11:48:25
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-05 11:54:09
 */
import React, { useState, useRef, useEffect } from 'react'
import { Code } from './codeview'

export interface Editable extends Code {
  width?: string
  height?: string
  onSave?: (content: string) => void
  status?: 'edit' | 'view'
}

export const Editable = ({
  width = '90%',
  height = '100px',
  onSave,
  status = 'view',
  children = '',
  start,
  end,
  keywords
}: Editable) => {
  const [state_content, setState_content] = useState<'edit' | 'view'>(status)
  const text_ref = useRef(null)
  useEffect(() => {
    const target = text_ref.current as HTMLTextAreaElement
    target && (target.style.height = target.scrollHeight + 'px')
  })
  switch (state_content) {
    case 'view':
      return (
        <>
          <Code keywords={keywords} start={start} end={end}>
            {children}
          </Code>
          <div>
            <button onClick={() => setState_content('edit')}>编辑</button>
          </div>
        </>
      )
    case 'edit':
      return (
        <>
          <textarea
            ref={text_ref}
            defaultValue={children}
            style={{ width, height }}
          />
          <div>
            <button
              onClick={() => {
                setState_content('view')
                onSave && onSave(text_ref.current['value'])
              }}
            >
              保存
            </button>
          </div>
        </>
      )
  }
}
