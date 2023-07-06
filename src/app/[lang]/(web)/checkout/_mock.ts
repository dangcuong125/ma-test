import { ICartItem, IOrderShippingItem } from "./interface";

export const cartItemMock: ICartItem[] = [
  {
    quantity: 1,
    productToVariantIds: [205],
    isValid: true,
    product: {
      onSale: false,
      id: 180,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 202,
      thumbnail: {
        id: 2206,
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/bd1921b6-4be0-4d8a-85b4-381731d6e157.png",
      },
      productDetails: [
        {
          lang: "VN",
          name: "10/4 sản phẩm 2",
          description:
            "<p>XXXXX tượng trưng cho 5 ký tự được chọn từ 28/36 ký tự bảng chữ cái, Unique trên hệ thống, không sử dụng các ký tự dễ gây nhầm lẫn sau: O,0,U,V,W,1,I, Q.&amp;nbsp;Sau đó sẽ được lọc và loại trừ ra những trường hợp:3/5 ký tự sau không được giống nhau 80%.&amp;nbsp;2 ký tự sát nhau trong bộ từ điển không được đứng sát nhau.&amp;nbsp;&amp;nbsp;5 ký tự đó không là 5 ký tự số hoặc chữ viết hoa liên tục.&amp;nbsp;5 ký tự đó không được giống nhau.Mã muỗng sẽ có hạn sử dụng là 2 năm 1 tháng kể từ ngày áp dụngThời hạn của muỗng khi tạo chỉ được sử dụng trong tháng áp dụng.Hướng dẫn vị trí khắc mã muỗng.Mã muỗng gồm 8&amp;nbsp; ký tự được khắc vào vị trí tùy thuộc vào mỗi muỗng có trong lon sữaMã muỗng được khắc rõ ràng, không bị mờ và bị mất chữ.Mã sau khi khắc phải nhìn và đọc được bằng mắt thường.Ghi chú:Trong phần mềm: đã setup sẵn phần nhóm và ký hiệu muỗng, quy cách sản phẩmFile tải xuống: tên file: tên nhà máy ABC ngày tạo&amp;nbsp; (VD AWD_K32_31_01_2023)File tạo sẽ chia nhỏ sheet thành 2000 mã 1 : vd tạo mã muỗng là 10.000 thì chia làm 5 sheet mỗi sheet 2000 mã.Trong phần mềm có phần ngày áp dụng hoặc tháng áp dụng.Trong phần mềm khi kiểm tra 1 mã code sẽ xem được nó nằm trong file gì ngày nào tạoMã QR Code của Sữa bột pha sẵn:Thẻ cào:Sử dụng hệ thống tạo mã QR Code của Teso.&amp;nbsp;Mã QR Code sản phẩm Sữa bột pha sẵn được phát hành từ Teso, quy định tạo mã QR code sẽ được Teso phát hành với mã phân biệt (tương tự như sữa bột), Sau đó nhà máy Aiwado sẽ chuyển dãy mã QR Code cho nhà máy (xưởng in) để in ấn.Mã QR code được in lên tờ phiếu (card) dạng thẻ cào, sau khi cào ra sẽ có mã QR code để quét được trên APP. 01 thẻ sẽ được bỏ vào thùng sữa.Mỗi một giai đoạn/ chiến dịch, Aiwado sẽ thiết kế mẫu thẻ cào khác nhau.Vị trí thẻ cào trong thùng sữa:Thẻ cào được bỏ vào thùng Sữa pha sẵn.Được niêm phong bằng băng keo có thông tin của chương trình.</p>",
          shortDescription: "10/4 sản phẩm 2",
          slug: "104-san-pham-2",
        },
      ],
      productVariants: [
        {
          id: 202,
          price: 10,
          quantity: 41,
          salePrice: 1,
          sku: "AW01",
          name: "Diệp test 10/4",
          productAttributeTerms: [
            {
              id: 87,
              productAttributeTermDetails: [
                {
                  id: 143,
                  lang: "EN",
                  value: "value1",
                },
              ],
              productAttribute: {
                id: 62,
                type: "STRING",
                productAttributeDetails: [
                  {
                    id: 87,
                    lang: "EN",
                    name: "Ngành hàng",
                    description: "Ngành hàng",
                  },
                ],
              },
            },
            {
              id: 88,
              productAttributeTermDetails: [
                {
                  id: 144,
                  lang: "EN",
                  value: "value2",
                },
              ],
              productAttribute: {
                id: 63,
                type: "STRING",
                productAttributeDetails: [
                  {
                    id: 80,
                    lang: "EN",
                    name: "test2",
                    description: "test2",
                  },
                ],
              },
            },
          ],
          productVariantPoint: {
            id: 158,
            point: 10,
            salePoint: 0,
          },
        },
      ],
    },
  },
  {
    quantity: 4,
    productToVariantIds: [221],
    isValid: true,
    product: {
      onSale: false,
      id: 194,
      type: "CONFIGURABLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 202,
      thumbnail: {
        id: 2334,
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/936d0840-b214-4cad-a2b6-e34c115c928a.jpg",
      },
      productDetails: [
        {
          lang: "VN",
          name: "tesst3",
          description: "<p>test3</p>",
          shortDescription: "test3",
          slug: "tesst3",
        },
      ],
      productVariants: [
        {
          id: 202,
          price: 10,
          quantity: 41,
          salePrice: 1,
          sku: "AW01",
          name: "Diệp test 10/4",
          productAttributeTerms: [
            {
              id: 87,
              productAttributeTermDetails: [
                {
                  id: 143,
                  lang: "EN",
                  value: "value1",
                },
              ],
              productAttribute: {
                id: 62,
                type: "STRING",
                productAttributeDetails: [
                  {
                    id: 87,
                    lang: "EN",
                    name: "Ngành hàng",
                    description: "Ngành hàng",
                  },
                ],
              },
            },
            {
              id: 88,
              productAttributeTermDetails: [
                {
                  id: 144,
                  lang: "EN",
                  value: "value2",
                },
              ],
              productAttribute: {
                id: 63,
                type: "STRING",
                productAttributeDetails: [
                  {
                    id: 80,
                    lang: "EN",
                    name: "test2",
                    description: "test2",
                  },
                ],
              },
            },
          ],
          productVariantPoint: {
            id: 158,
            point: 10,
            salePoint: 0,
          },
        },
      ],
    },
  },
  {
    quantity: 1,
    productToVariantIds: [220],
    isValid: true,
    product: {
      onSale: false,
      id: 193,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 228,
      thumbnail: {
        id: 2333,
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/87baa023-8b2d-4909-aa77-ee7bea40b819.jpg",
      },
      productDetails: [
        {
          lang: "VN",
          name: "tesst2",
          description: "<p>test3</p>",
          shortDescription: "test3",
          slug: "tesst2",
        },
      ],
      productVariants: [
        {
          id: 228,
          price: 400000,
          quantity: 363,
          salePrice: 0,
          sku: "da2",
          name: "duyanh2",
          productAttributeTerms: [
            {
              id: 87,
              productAttributeTermDetails: [
                {
                  id: 143,
                  lang: "EN",
                  value: "value1",
                },
              ],
              productAttribute: {
                id: 62,
                type: "STRING",
                productAttributeDetails: [
                  {
                    id: 87,
                    lang: "EN",
                    name: "Ngành hàng",
                    description: "Ngành hàng",
                  },
                ],
              },
            },
            {
              id: 88,
              productAttributeTermDetails: [
                {
                  id: 144,
                  lang: "EN",
                  value: "value2",
                },
              ],
              productAttribute: {
                id: 63,
                type: "STRING",
                productAttributeDetails: [
                  {
                    id: 80,
                    lang: "EN",
                    name: "test2",
                    description: "test2",
                  },
                ],
              },
            },
          ],
          productVariantPoint: {
            id: 184,
            point: 4,
            salePoint: 0,
          },
        },
      ],
    },
  },
  {
    quantity: 1,
    productToVariantIds: [212],
    isValid: true,
    product: {
      onSale: false,
      id: 187,
      type: "VIRTUAL",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 224,
      thumbnail: {
        id: 2274,
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/49f5a712-0a73-4ec7-901f-efc474cd87c0.jpg",
      },
      productDetails: [
        {
          lang: "VN",
          name: "Dpain",
          description: "<p>12121</p>",
          shortDescription: "xin chao",
          slug: "Dpain2",
        },
        {
          lang: "VN",
          name: "Dpain",
          description: "<p>12121</p>",
          shortDescription: "xin chao",
          slug: "Dpain2",
        },
        {
          lang: "VN",
          name: "Dpain123",
          description: "<p>12121</p>",
          shortDescription: "xin chao",
          slug: "Dpain2",
        },
        {
          lang: "VN",
          name: "Dpain123",
          description:
            '<p>12121</p><p><br></p><p>Tét link: <a href="https://stackoverflow.com/questions/35531679/react-native-open-links-in-browser" rel="noopener noreferrer" target="_blank">https://stackoverflow.com/questions/35531679/react-native-open-links-in-browser</a></p>',
          shortDescription: "xin chao",
          slug: "Dpain2",
        },
        {
          lang: "VN",
          name: "Dpain123",
          description:
            "<p>12121</p><p><br></p><p>Tét link: https://stackoverflow.com/questions/35531679/react-native-open-links-in-browser</p>",
          shortDescription: "xin chao",
          slug: "Dpain2",
        },
        {
          lang: "VN",
          name: "Dpain123",
          description:
            '<p>12121</p><p><br></p><p>Tét link: <a href=" https://stackoverflow.com/questions/35531679/react-native-open-links-in-browser" rel="noopener noreferrer" target="_blank">https://stackoverflow.com/questions/35531679/react-native-open-links-in-browser</a></p>',
          shortDescription: "xin chao",
          slug: "Dpain2",
        },
        {
          lang: "VN",
          name: "Dpain123",
          description:
            '<p>12121</p><p><br></p><p>Tét link: <a href=" https://stackoverflow.com/questions/35531679/react-native-open-links-in-browser" rel="noopener noreferrer" target="_blank">https://stackoverflow.com/questions/35531679/react-native-open-links-in-browser</a></p><p><br></p><p><br></p><p>link2: <a href="https://vnexpress.net/" rel="noopener noreferrer" target="_blank">https://vnexpress.net/</a></p>',
          shortDescription: "xin chao",
          slug: "Dpain2",
        },
      ],
      productVariants: [
        {
          id: 224,
          price: 1212,
          quantity: 914,
          salePrice: 12,
          sku: "dpain",
          name: "dpain",
          productAttributeTerms: [],
          productVariantPoint: {
            id: 180,
            point: 12,
            salePoint: 1,
          },
        },
      ],
    },
  },
  {
    quantity: 2,
    productToVariantIds: [229],
    isValid: true,
    product: {
      onSale: false,
      id: 199,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 217,
      thumbnail: {
        id: 2347,
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/024de926-02da-4e5d-813f-5705ffa2db08.png",
      },
      productDetails: [
        {
          lang: "VN",
          name: "Sữa bột Aiwado Aiwa - Thân Khoẻ Tâm An 810g",
          description:
            "<p>Aiwa – Sữa cho thân khỏe tâm an với công thức thân tâm độc quyền, ứng dụng các nghiên cứu về dinh dưỡng của Nhật Bản.&nbsp;</p><p>Thân khỏe nhờ 30 dưỡng chất bồi bổ cơ thể, Tâm an nhờ 2 dưỡng chất làm dịu não bộ giúp thân thể khỏe mạnh &amp; tâm trí thư thái.</p><p>&nbsp;Lần đầu tiên tại Việt Nam, ngoài tác dụng bồi bổ cho Thân, công thức thân tâm của Aiwado còn cung cấp dưỡng chất cho Tâm nhờ ứng dụng những nghiên cứu từ Nhật Bản về dưỡng chất GABA và Lactium.</p><p>- GABA là một hoạt chất có mặt trong gạo lứt nảy mầm, có công dụng làm dịu hoạt động của não bộ, ổn định huyết áp và cải thiện giấc ngủ.</p><p>- Lactium là một hoạt chất có nguồn gốc từ đạm sữa, được tìm thấy qua quan sát trẻ bú mẹ trở nên ngoan ngoãn và dễ ngủ, đã được nghiên cứu xác nhận giúp làm giảm các biểu hiện của stress.</p><p>Sự phối hợp khoa học của của 2 dưỡng chất nói trên trong công thức Thân Tâm không những giúp thân thể khoẻ mạnh, mà còn đem lại sự thư thái cho tinh thần.</p><p>Aiwa - Sữa cho thân khỏe tâm an - Đạt Tiêu chuẩn Dinh dưỡng của Bộ Y Tế Nhật Bản.</p><p><br></p><p>Hệ dưỡng chất cho Thân</p><p>- Tăng cường sức đề kháng, tốt cho tim mạch:</p><p>Vitamin A, C, E, Kẽm và Selen giúp tăng sức đề kháng, hỗ trợ giảm mệt mỏi</p><p>Omega 3,6, MUFAs, PUFAs hệ chất béo tốt giúp hỗ trợ sức khoẻ tim mạch.</p><p>Plantstanol giúp ngăn cản hấp thu Cholesterol xấu từ thức ăn.</p><p>- Tăng cường hoạt động não bộ:</p><p>Omega 3.6; Taurine, Choline: giúp hỗ trợ dẫn truyền thần kinh ở não bộ, tăng cường tỉnh táo, minh mẫn</p><p>- Hỗ trợ hệ xương – cơ- khớp khoẻ mạnh:</p><p>Protein &amp;HMB giúp tái tạo và xây dựng khối cơ. Bổ sung dưỡng chất HMB.</p><p>Canxi, Phospho tăng cường xương chắc khoẻ, ngừa loãng xương;</p><p>Glucosamine giúp khớp dẻo dai, linh hoạt.</p><p>- Tốt cho gan, thận, giảm nguy cơ tiểu đường:</p><p>Whey protein: là nhóm protein giàu BCAAs (acid amin chuỗi nhánh), dễ hấp thu nên tốt</p><p>Hàm lượng Natri, Phospho thấp không làm ảnh hưởng chức năng lọc của Thận</p><p>Bổ sung Palatinose – thành phần bột đường có GI thấp, nguồn gốc từ củ cải đường.</p><p>- Hỗ trợ tiêu hoá:</p><p>Lợi khuẩn Nhật bản giúp cân bằng hệ tiêu hoá và tăng cường miễn dịch.</p><p>FOS/Inulin là chất xơ hoà tan từ thực vật giúp giảm táo bón, hỗ trợ đường ruột luôn khoẻ mạnh.</p><p><br></p><p>Hệ dưỡng chất cho Tâm</p><p>GABA, Lactium: giúp ngủ ngon &amp; sâu giấc hơn, giúp kiểm soát các biểu hiện của stress, đem đến sự thư thái, vui vẻ minh mẫn cho đời sống tinh thần.</p><p><br></p>",
          shortDescription: "Sữa bột Aiwado Aiwa - Thân Khoẻ Tâm An 810g",
          slug: "Sua-bot-Aiwado-Aiwa-Than-Khoe-Tam-An-810g",
        },
      ],
      productVariants: [
        {
          id: 217,
          price: 3,
          quantity: 152,
          salePrice: 0,
          sku: "123",
          name: "Sữa bột cho trẻ",
          productAttributeTerms: [
            {
              id: 92,
              productAttributeTermDetails: [
                {
                  id: 175,
                  lang: "VN",
                  value: "350g",
                },
                {
                  id: 176,
                  lang: "EN",
                  value: "1234",
                },
              ],
              productAttribute: {
                id: 66,
                type: "STRING",
                productAttributeDetails: [
                  {
                    id: 85,
                    lang: "VN",
                    name: "Khối lượng",
                    description: "Nặng",
                  },
                ],
              },
            },
          ],
          productVariantPoint: {
            id: 173,
            point: 20,
            salePoint: 0,
          },
        },
      ],
    },
  },
  {
    quantity: 1,
    productToVariantIds: [218],
    isValid: true,
    product: {
      onSale: false,
      id: 191,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 227,
      thumbnail: {
        id: 2331,
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/6aed503e-733a-4d84-b6c3-f80422df811b.jpg",
      },
      productDetails: [
        {
          lang: "VN",
          name: "test2",
          description:
            '<p><a href="https://aiwadoshop.com/" rel="noopener noreferrer" target="_blank">https://aiwadoshop.com/</a></p><p><br></p><p>Kazu Gain Gold - Số 1 Sữa Mát Tăng Cân giúp trẻ Tiêu Hóa Tốt, Tăng Cân Chuẩn &amp; Phát Triển Toàn Diện.&nbsp;</p><p>Kazu Gain Gold bổ sung Lợi khuẩn Nhật Bản và Bộ 3 siêu chất xơ (GOS Nhật Bản, FOS và HMO), cùng Hệ Đạm Quý (Đạm Whey, Đạm Sữa) &amp; MCT cao cấp giúp con ổn định hệ tiêu hóa, hấp thu tốt từ đó tăng cân chuẩn.</p><p>Kazu Gain Gold *Đạt Tiêu Chuẩn dinh dưỡng của Bộ Y Tế Nhật Bản, đặc biệt được Hiệp hội trao đổi Y Tế Nhật Bản chứng nhận, tự hào mang đến cho con nguồn dinh dưỡng chuẩn Nhật.</p><p>Thông tin chi tiết: <a href="https://aiwado.com/kazu-gain-gold.html" rel="noopener noreferrer" target="_blank">https://aiwado.com/kazu-gain-gold.html</a></p><p>Để tham gia tích xu đổi quà thực hiện các bước sau:</p><p><strong>Bước 1:</strong> Mẹ nhấn đổi quà</p><p><strong>Bước 2:</strong>&nbsp;Thêm vào giỏ quà sản phẩm Ba/Mẹ muốn đổi</p><p><strong>Bước 3:</strong> Kiểm tra giỏ quà để xác nhận thông tin địa chỉ giao hàng</p><p><strong>Bước 4:</strong> Bấm vào nút "Đổi xu" và Quà tặng sẽ được giao miễn phí tới Ba/Mẹ&nbsp;</p><p>Mọi thông tin thắc mắc Ba/Mẹ vui lòng liên hệ để được tư vấn:</p><p><span style="color: rgb(230, 0, 0);">1. Fanpage Aiwado - Dinh dưỡng chuẩn Nhật Bản</span></p><p><span style="color: rgb(230, 0, 0);">2. Zalo Aiwado Offical</span></p><p><span style="color: rgb(230, 0, 0);">3. Hotline: 1900 6093&nbsp;</span></p>',
          shortDescription: "test3",
          slug: "test3",
        },
      ],
      productVariants: [
        {
          id: 227,
          price: 300000,
          quantity: 996,
          salePrice: 0,
          sku: "da1",
          name: "duyanh1",
          productAttributeTerms: [
            {
              id: 88,
              productAttributeTermDetails: [
                {
                  id: 144,
                  lang: "EN",
                  value: "value2",
                },
              ],
              productAttribute: {
                id: 63,
                type: "STRING",
                productAttributeDetails: [
                  {
                    id: 80,
                    lang: "EN",
                    name: "test2",
                    description: "test2",
                  },
                ],
              },
            },
            {
              id: 91,
              productAttributeTermDetails: [
                {
                  id: 148,
                  lang: "VN",
                  value: "Food & drink",
                },
              ],
              productAttribute: {
                id: 62,
                type: "STRING",
                productAttributeDetails: [
                  {
                    id: 87,
                    lang: "EN",
                    name: "Ngành hàng",
                    description: "Ngành hàng",
                  },
                ],
              },
            },
          ],
          productVariantPoint: {
            id: 183,
            point: 200000,
            salePoint: 0,
          },
        },
      ],
    },
  },
];

export const orderShippingMock: IOrderShippingItem[] = [
  {
    id: 104,
    name: "Tuấn 1",
    address1: "1",
    phone: "+84903221245",
    isDefault: true,
    province: {
      id: 15727,
      name: "Hà Nội",
      type: "PROVINCE",
      parentId: null,
    },
    ward: {
      id: 26409,
      name: "Phường Tràng Tiền",
      type: "WARD",
      parentId: 15961,
    },
    district: {
      id: 15961,
      name: "Quận Hoàn Kiếm",
      type: "DISTRICT",
      parentId: 15727,
    },
  },
  {
    id: 105,
    name: "tuấn 2",
    address1: "2",
    phone: "+84393420676",
    isDefault: false,
    province: {
      id: 15731,
      name: "Tuyên Quang",
      type: "PROVINCE",
      parentId: null,
    },
    ward: {
      id: 27207,
      name: "XÃ XUÂN LẬP",
      type: "WARD",
      parentId: 16199,
    },
    district: {
      id: 16199,
      name: "Huyện Nà Hang",
      type: "DISTRICT",
      parentId: 15731,
    },
  },
];
