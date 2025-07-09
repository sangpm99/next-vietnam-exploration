"use client"
import "@ant-design/v5-patch-for-react-19"

import { StyleProvider } from "@ant-design/cssinjs"
import { ConfigProvider } from "antd"
import { AntdRegistry } from "@ant-design/nextjs-registry"

import type { ReactNode } from "react"

function AntdWrapper({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <StyleProvider hashPriority='high'>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "rgba(218,36,30)",
              fontFamily: "var(--font-poppins, sans-serif)"
            }
          }}
        >
          {children}
        </ConfigProvider>
      </StyleProvider>
    </AntdRegistry>
  )
}

export default AntdWrapper
