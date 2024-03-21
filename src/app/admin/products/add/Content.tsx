"use client"
import Breadcrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Card, { CardContent, CardHeader } from "@/components/ui/card";
import ContainerInput from "@/components/ui/container/ContainerInput";
import { Selection } from "@/components/ui/form/Select";
import Input, { InputWithItemLeft } from "@/components/ui/form/input";
import Label from "@/components/ui/label";
import { breadcrumbAddProduct } from "@/lib/breadcrumb";
import { convertObjToDataSelection } from "@/lib/utils";

const sizeObj = {
  "M": "M",
  "L": "L",
  "XL": "XL",
  "XXL": "XXL",
};


export default function ContentAddProduct() {
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <Breadcrumb breadcrumb={breadcrumbAddProduct} />
        <Button className="px-8">Save</Button>
      </div>
      <div className="flex gap-x-3">
        <div className="basis-[500px]">
          <Card>
            <CardHeader className="font-medium">Gambar</CardHeader>
            <CardContent>
              <div className="w-full h-32 bg-gray-200 rounded-lg"></div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full flex flex-col gap-y-5">
          <Card>
            <CardHeader className="font-medium">Informasi Produk</CardHeader>
            <CardContent className="flex flex-col gap-y-5">
              <div className="flex gap-x-3">
                <ContainerInput className="w-full">
                  <Label>Artikel</Label>
                  <Input placeholder="Masukkan Nama Artikel" />
                </ContainerInput>

                <ContainerInput>
                  <Label>SKU</Label>
                  <Input className="w-[300px]" placeholder="Nomor SKU" />
                </ContainerInput>
              </div>

              <div className="flex gap-x-3">
                <ContainerInput className="w-full">
                  <Label>Kategori</Label>
                  <Selection
                    enableSearch={false}
                    placeholder="Pilih Kategori"
                    options={convertObjToDataSelection(sizeObj) || []}
                    // onClickOption={onClickOption}
                    // value={sizeObj?.[value] || ""}
                  />
                </ContainerInput>

                <ContainerInput className="w-full">
                  <Label>Size</Label>
                  <Selection
                    enableSearch={false}
                    placeholder="Pilih Size"
                    options={convertObjToDataSelection(sizeObj) || []}
                    // onClickOption={onClickOption}
                    // value={sizeObj?.[value] || ""}
                  />
                </ContainerInput>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="font-medium">Informasi Harga</CardHeader>
            <CardContent>
              <div>
                <div className="flex gap-x-3 w-ful">
                  <ContainerInput className="w-full">
                    <Label>Hpp </Label>
                    <InputWithItemLeft
                      placeholder="Harga"
                      item={<span className="text-sm">Rp</span>}
                    />
                  </ContainerInput>

                  <ContainerInput className="w-full">
                    <Label>Dropship</Label>
                    <InputWithItemLeft
                      placeholder="Harga"
                      item={<span className="text-sm">Rp</span>}
                    />
                  </ContainerInput>

                  <ContainerInput className="w-full">
                    <Label>Jual</Label>
                    <InputWithItemLeft
                      placeholder="Harga"
                      item={<span className="text-sm">Rp</span>}
                    />
                  </ContainerInput>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="font-medium">Informasi Stok</CardHeader>
            <CardContent>
              <div className="flex gap-x-3">
                <ContainerInput className="w-full">
                  <Label>Stok</Label>
                  <Input placeholder="Pcs" />
                </ContainerInput>
                <ContainerInput className="w-full">
                  <Label>Stok</Label>
                  <Input placeholder="Pcs" />
                </ContainerInput>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
