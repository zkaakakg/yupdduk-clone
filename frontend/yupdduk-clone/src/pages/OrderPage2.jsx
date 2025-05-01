import { useState } from "react";
import Header from "../components/Header.jsx";
import "../styles/OrderPage2.css";

const OrderPage2 = () => {
  const storeInfo = {
    id: 1,
    storeName: "엽기떡볶이 남대문점",
    managerName: "장가은",
    address: "서울특별시 중구 세종대로 28 (남대문로5가) 103호",
    storePhone: "02-318-8597",
    openTime: "11:00:00",
    closeTime: "22:00:00",
    userId: 8,
  };
  const menuList = [
    {
      menuId: 1,
      menuName: "2인엽기떡볶이",
      price: 9000,
      image:
        "https://www.yupdduk.com/bod/config/menu/2%EC%9D%B8%EC%97%BD%EA%B8%B0%EB%96%A1%EB%B3%B6%EC%9D%B4_1_4_1_1_1_1_1_1.png",
      options: [
        {
          name: "맛 선택",
          type: "radio",
          values: [
            { label: "매운맛", price: 0 },
            { label: "오리지널", price: 0 },
            { label: "덜매운맛", price: 0 },
            { label: "착한맛", price: 0 },
          ],
        },
        {
          name: "추가메뉴(토핑)",
          type: "radio",
          values: [
            { label: "우삼겹", price: 3000 },
            { label: "통유부(4개)", price: 1000 },
            { label: "퐁당치즈만두(7개)", price: 2000 },
            { label: "우동사리", price: 2000 },
            { label: "당면면사리", price: 2000 },
            { label: "중국당면", price: 2500 },
            { label: "분모자", price: 2500 },
          ],
        },
        {
          name: "추가메뉴(토핑)",
          type: "checkbox",
          values: [
            { label: "모짜치즈", price: 3000 },
            { label: "콘마요", price: 2500 },
            { label: "햄(7개)", price: 1000 },
            { label: "베이컨", price: 3000 },
            { label: "계란(2개)", price: 1500 },
            { label: "메추리알(5개)", price: 1000 },
          ],
        },
        {
          name: "추가메뉴(사이드)",
          type: "checkbox",
          values: [
            { label: "감자채튀김", price: 2500 },
            { label: "엽기시즈닝(버터갈릭맛)", price: 300 },
            { label: "엽기오돌뼈밥", price: 4500 },
            { label: "참치마요밥", price: 3500 },
            { label: "주먹김밥(셀프)", price: 2000 },
            { label: "계란찜", price: 2000 },
            { label: "계란야채죽", price: 5000 },
            { label: "순대", price: 3000 },
            { label: "오뎅튀김(15개)", price: 2000 },
            { label: "모둠튀김", price: 2000 },
            { label: "만두(4개)", price: 2000 },
            { label: "김말이(3개)", price: 2000 },
            { label: "야채튀김(1개)", price: 1000 },
            { label: "꿔바로우(5개)", price: 5900 },
            { label: "엽봉(5개)", price: 5000 },
            { label: "바삭치즈만두(7개)", price: 2000 },
            { label: "엽도그(1개)", price: 2000 },
            { label: "공깃밥", price: 1000 },
            { label: "단무지(1개)", price: 500 },
          ],
        },
        {
          name: "추가메뉴(음/주류)",
          type: "checkbox",
          values: [{ label: "음료(유산균)(450ml)", price: 1000 }],
        },
      ],
    },
    {
      menuId: 2,
      menuName: "엽기메뉴",
      price: 14000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%97%BD%EA%B8%B0%EB%A9%94%EB%89%B4_1_3_1_1_1_1_1_1.png",
      options: [
        {
          name: "엽기메뉴 선택",
          type: "radio",
          values: [
            { label: "엽기떡볶이", price: 0 },
            { label: "엽기오뎅", price: 0 },
            { label: "엽기반반", price: 0 },
            { label: "엽기분모자떡볶이", price: 3000 },
          ],
        },
        {
          name: "매운맛 선택",
          type: "radio",
          values: [
            { label: "매운맛", price: 0 },
            { label: "오리지널", price: 0 },
            { label: "덜매운맛", price: 0 },
            { label: "초보맛", price: 0 },
            { label: "착한맛", price: 0 },
          ],
        },
        {
          name: "추가메뉴(토핑)",
          type: "radio",
          values: [
            { label: "우삼겹", price: 3000 },
            { label: "통유부(4개)", price: 1000 },
            { label: "퐁당치즈만두(7개)", price: 2000 },
            { label: "우동사리", price: 2000 },
            { label: "당면면사리", price: 2000 },
            { label: "중국당면", price: 2500 },
            { label: "분모자", price: 2500 },
          ],
        },
        {
          name: "추가메뉴(토핑)",
          type: "checkbox",
          values: [
            { label: "모짜치즈", price: 3000 },
            { label: "콘마요", price: 2500 },
            { label: "햄(7개)", price: 1000 },
            { label: "베이컨", price: 3000 },
            { label: "계란(2개)", price: 1500 },
            { label: "메추리알(5개)", price: 1000 },
          ],
        },
        {
          name: "추가메뉴(사이드)",
          type: "checkbox",
          values: [
            { label: "감자채튀김", price: 2500 },
            { label: "엽기시즈닝(버터갈릭맛)", price: 300 },
            { label: "엽기오돌뼈밥", price: 4500 },
            { label: "참치마요밥", price: 3500 },
            { label: "주먹김밥(셀프)", price: 2000 },
            { label: "계란찜", price: 2000 },
            { label: "계란야채죽", price: 5000 },
            { label: "순대", price: 3000 },
            { label: "오뎅튀김(15개)", price: 2000 },
            { label: "모둠튀김", price: 2000 },
            { label: "만두(4개)", price: 2000 },
            { label: "김말이(3개)", price: 2000 },
            { label: "야채튀김(1개)", price: 1000 },
            { label: "꿔바로우(5개)", price: 5900 },
            { label: "엽봉(5개)", price: 5000 },
            { label: "바삭치즈만두(7개)", price: 2000 },
            { label: "엽도그(1개)", price: 2000 },
            { label: "공깃밥", price: 1000 },
            { label: "단무지(1개)", price: 500 },
          ],
        },
        {
          name: "추가메뉴(음/주류)",
          type: "checkbox",
          values: [{ label: "음료(유산균)(450ml)", price: 1000 }],
        },
      ],
    },
    {
      menuId: 3,
      menuName: "로제메뉴",
      price: 16000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EB%A1%9C%EC%A0%9C%EB%A9%94%EB%89%B4_1_4_1_1_1_1_1_1.png",
      options: [
        {
          name: "로제메뉴 선택",
          type: "radio",
          values: [
            { label: "로제떡볶이", price: 0 },
            { label: "로제오뎅", price: 0 },
            { label: "로제반반", price: 0 },
            { label: "로제분모자떡볶이", price: 3000 },
          ],
        },
        {
          name: "매운맛 선택",
          type: "radio",
          values: [
            { label: "오리지널", price: 0 },
            { label: "착한맛", price: 0 },
          ],
        },
        {
          name: "추가메뉴(토핑)",
          type: "radio",
          values: [
            { label: "우삼겹", price: 3000 },
            { label: "통유부(4개)", price: 1000 },
            { label: "퐁당치즈만두(7개)", price: 2000 },
            { label: "우동사리", price: 2000 },
            { label: "당면면사리", price: 2000 },
            { label: "중국당면", price: 2500 },
            { label: "분모자", price: 2500 },
          ],
        },
        {
          name: "추가메뉴(토핑)",
          type: "checkbox",
          values: [
            { label: "모짜치즈", price: 3000 },
            { label: "콘마요", price: 2500 },
            { label: "햄(7개)", price: 1000 },
            { label: "베이컨", price: 3000 },
            { label: "계란(2개)", price: 1500 },
            { label: "메추리알(5개)", price: 1000 },
          ],
        },
        {
          name: "추가메뉴(사이드)",
          type: "checkbox",
          values: [
            { label: "감자채튀김", price: 2500 },
            { label: "엽기시즈닝(버터갈릭맛)", price: 300 },
            { label: "엽기오돌뼈밥", price: 4500 },
            { label: "참치마요밥", price: 3500 },
            { label: "주먹김밥(셀프)", price: 2000 },
            { label: "계란찜", price: 2000 },
            { label: "계란야채죽", price: 5000 },
            { label: "순대", price: 3000 },
            { label: "오뎅튀김(15개)", price: 2000 },
            { label: "모둠튀김", price: 2000 },
            { label: "만두(4개)", price: 2000 },
            { label: "김말이(3개)", price: 2000 },
            { label: "야채튀김(1개)", price: 1000 },
            { label: "꿔바로우(5개)", price: 5900 },
            { label: "엽봉(5개)", price: 5000 },
            { label: "바삭치즈만두(7개)", price: 2000 },
            { label: "엽도그(1개)", price: 2000 },
            { label: "공깃밥", price: 1000 },
            { label: "단무지(1개)", price: 500 },
          ],
        },
        {
          name: "추가메뉴(음/주류)",
          type: "checkbox",
          values: [{ label: "음료(유산균)(450ml)", price: 1000 }],
        },
      ],
    },
    {
      menuId: 4,
      menuName: "마라떡볶이",
      price: 16000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EB%A7%88%EB%9D%BC%EB%96%A1%EB%B3%B6%EC%9D%B4_1_4_1_1_1_1_1_1.png",
      options: [
        {
          name: "맛 선택",
          type: "radio",
          values: [
            { label: "오리지널", price: 0 },
            { label: "착한맛", price: 0 },
          ],
        },
        {
          name: "추가메뉴(토핑)",
          type: "radio",
          values: [
            { label: "우삼겹", price: 3000 },
            { label: "통유부(4개)", price: 1000 },
            { label: "퐁당치즈만두(7개)", price: 2000 },
            { label: "우동사리", price: 2000 },
            { label: "당면면사리", price: 2000 },
            { label: "중국당면", price: 2500 },
            { label: "분모자", price: 2500 },
          ],
        },
        {
          name: "추가메뉴(토핑)",
          type: "checkbox",
          values: [
            { label: "모짜치즈", price: 3000 },
            { label: "콘마요", price: 2500 },
            { label: "햄(7개)", price: 1000 },
            { label: "베이컨", price: 3000 },
            { label: "계란(2개)", price: 1500 },
            { label: "메추리알(5개)", price: 1000 },
          ],
        },
        {
          name: "추가메뉴(사이드)",
          type: "checkbox",
          values: [
            { label: "감자채튀김", price: 2500 },
            { label: "엽기시즈닝(버터갈릭맛)", price: 300 },
            { label: "엽기오돌뼈밥", price: 4500 },
            { label: "참치마요밥", price: 3500 },
            { label: "주먹김밥(셀프)", price: 2000 },
            { label: "계란찜", price: 2000 },
            { label: "계란야채죽", price: 5000 },
            { label: "순대", price: 3000 },
            { label: "오뎅튀김(15개)", price: 2000 },
            { label: "모둠튀김", price: 2000 },
            { label: "만두(4개)", price: 2000 },
            { label: "김말이(3개)", price: 2000 },
            { label: "야채튀김(1개)", price: 1000 },
            { label: "꿔바로우(5개)", price: 5900 },
            { label: "엽봉(5개)", price: 5000 },
            { label: "바삭치즈만두(7개)", price: 2000 },
            { label: "엽도그(1개)", price: 2000 },
            { label: "공깃밥", price: 1000 },
            { label: "단무지(1개)", price: 500 },
          ],
        },
        {
          name: "추가메뉴(음/주류)",
          type: "checkbox",
          values: [{ label: "음료(유산균)(450ml)", price: 1000 }],
        },
      ],
    },
    {
      menuId: 5,
      menuName: "마라로제떡볶이",
      price: 16000,
      image:
        "https://www.yupdduk.com/bod/config/menu/24.02.22%20%EB%A7%88%EB%9D%BC%EB%A1%9C%EC%A0%9C%EB%96%A1%EB%B3%B6%EC%9D%B4_500x500_1_1_1_1_1_1_1.png",
      options: [
        {
          name: "맛 선택",
          type: "radio",
          values: [
            { label: "오리지널", price: 0 },
            { label: "착한맛", price: 0 },
          ],
        },
        {
          name: "추가메뉴(토핑)",
          type: "radio",
          values: [
            { label: "우삼겹", price: 3000 },
            { label: "통유부(4개)", price: 1000 },
            { label: "퐁당치즈만두(7개)", price: 2000 },
            { label: "우동사리", price: 2000 },
            { label: "당면면사리", price: 2000 },
            { label: "중국당면", price: 2500 },
            { label: "분모자", price: 2500 },
          ],
        },
        {
          name: "추가메뉴(토핑)",
          type: "checkbox",
          values: [
            { label: "모짜치즈", price: 3000 },
            { label: "콘마요", price: 2500 },
            { label: "햄(7개)", price: 1000 },
            { label: "베이컨", price: 3000 },
            { label: "계란(2개)", price: 1500 },
            { label: "메추리알(5개)", price: 1000 },
          ],
        },
        {
          name: "추가메뉴(사이드)",
          type: "checkbox",
          values: [
            { label: "감자채튀김", price: 2500 },
            { label: "엽기시즈닝(버터갈릭맛)", price: 300 },
            { label: "엽기오돌뼈밥", price: 4500 },
            { label: "참치마요밥", price: 3500 },
            { label: "주먹김밥(셀프)", price: 2000 },
            { label: "계란찜", price: 2000 },
            { label: "계란야채죽", price: 5000 },
            { label: "순대", price: 3000 },
            { label: "오뎅튀김(15개)", price: 2000 },
            { label: "모둠튀김", price: 2000 },
            { label: "만두(4개)", price: 2000 },
            { label: "김말이(3개)", price: 2000 },
            { label: "야채튀김(1개)", price: 1000 },
            { label: "꿔바로우(5개)", price: 5900 },
            { label: "엽봉(5개)", price: 5000 },
            { label: "바삭치즈만두(7개)", price: 2000 },
            { label: "엽도그(1개)", price: 2000 },
            { label: "공깃밥", price: 1000 },
            { label: "단무지(1개)", price: 500 },
          ],
        },
        {
          name: "추가메뉴(음/주류)",
          type: "checkbox",
          values: [{ label: "음료(유산균)(450ml)", price: 1000 }],
        },
      ],
    },
    {
      menuId: 6,
      menuName: "엽기닭볶음탕",
      price: 24000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%97%BD%EA%B8%B0%EB%8B%AD%EB%B3%B6%EC%9D%8C%ED%83%95_1_4_1_1_1_1_1_1.png",
      options: [
        {
          name: "매운맛 선택",
          type: "radio",
          values: [
            { label: "매운맛", price: 0 },
            { label: "오리지널", price: 0 },
            { label: "덜매운맛", price: 0 },
            { label: "초보맛", price: 0 },
            { label: "착한맛", price: 0 },
          ],
        },
        {
          name: "추가메뉴(토핑)",
          type: "radio",
          values: [
            { label: "우삼겹", price: 3000 },
            { label: "통유부(4개)", price: 1000 },
            { label: "퐁당치즈만두(7개)", price: 2000 },
            { label: "우동사리", price: 2000 },
            { label: "당면면사리", price: 2000 },
            { label: "중국당면", price: 2500 },
            { label: "분모자", price: 2500 },
          ],
        },
        {
          name: "추가메뉴(토핑)",
          type: "checkbox",
          values: [
            { label: "모짜치즈", price: 3000 },
            { label: "콘마요", price: 2500 },
            { label: "햄(7개)", price: 1000 },
            { label: "베이컨", price: 3000 },
            { label: "계란(2개)", price: 1500 },
            { label: "메추리알(5개)", price: 1000 },
          ],
        },
        {
          name: "추가메뉴(사이드)",
          type: "checkbox",
          values: [
            { label: "감자채튀김", price: 2500 },
            { label: "엽기시즈닝(버터갈릭맛)", price: 300 },
            { label: "엽기오돌뼈밥", price: 4500 },
            { label: "참치마요밥", price: 3500 },
            { label: "주먹김밥(셀프)", price: 2000 },
            { label: "계란찜", price: 2000 },
            { label: "계란야채죽", price: 5000 },
            { label: "순대", price: 3000 },
            { label: "오뎅튀김(15개)", price: 2000 },
            { label: "모둠튀김", price: 2000 },
            { label: "만두(4개)", price: 2000 },
            { label: "김말이(3개)", price: 2000 },
            { label: "야채튀김(1개)", price: 1000 },
            { label: "꿔바로우(5개)", price: 5900 },
            { label: "엽봉(5개)", price: 5000 },
            { label: "바삭치즈만두(7개)", price: 2000 },
            { label: "엽도그(1개)", price: 2000 },
            { label: "공깃밥", price: 1000 },
            { label: "단무지(1개)", price: 500 },
          ],
        },
        {
          name: "추가메뉴(음/주류)",
          type: "checkbox",
          values: [{ label: "음료(유산균)(450ml)", price: 1000 }],
        },
      ],
    },
    {
      menuId: 7,
      menuName: "엽기무뼈닭발",
      price: 15000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EB%A9%94%EC%9D%B8_%EC%97%BD%EA%B8%B0%EB%AC%B4%EB%BC%88%EB%8B%AD%EB%B0%9C_1.jpg",
      options: [
        {
          name: "추가메뉴(토핑)",
          type: "checkbox",
          values: [
            { label: "모짜치즈", price: 3000 },
            { label: "콘마요", price: 2500 },
            { label: "햄(7개)", price: 1000 },
            { label: "베이컨", price: 3000 },
            { label: "계란(2개)", price: 1500 },
            { label: "메추리알(5개)", price: 1000 },
          ],
        },
        {
          name: "추가메뉴(사이드)",
          type: "checkbox",
          values: [
            { label: "감자채튀김", price: 2500 },
            { label: "엽기시즈닝(버터갈릭맛)", price: 300 },
            { label: "엽기오돌뼈밥", price: 4500 },
            { label: "참치마요밥", price: 3500 },
            { label: "주먹김밥(셀프)", price: 2000 },
            { label: "계란찜", price: 2000 },
            { label: "계란야채죽", price: 5000 },
            { label: "순대", price: 3000 },
            { label: "오뎅튀김(15개)", price: 2000 },
            { label: "모둠튀김", price: 2000 },
            { label: "만두(4개)", price: 2000 },
            { label: "김말이(3개)", price: 2000 },
            { label: "야채튀김(1개)", price: 1000 },
            { label: "꿔바로우(5개)", price: 5900 },
            { label: "엽봉(5개)", price: 5000 },
            { label: "바삭치즈만두(7개)", price: 2000 },
            { label: "엽도그(1개)", price: 2000 },
            { label: "공깃밥", price: 1000 },
            { label: "단무지(1개)", price: 500 },
          ],
        },
        {
          name: "추가메뉴(음/주류)",
          type: "checkbox",
          values: [{ label: "음료(유산균)(450ml)", price: 1000 }],
        },
      ],
    },
    {
      menuId: 8,
      menuName: "엽기국물닭발",
      price: 15000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EB%A9%94%EC%9D%B8_%EC%97%BD%EA%B8%B0%EA%B5%AD%EB%AC%BC%EB%8B%AD%EB%B0%9C_1.jpg",
      options: [
        {
          name: "추가메뉴(토핑)",
          type: "checkbox",
          values: [
            { label: "퐁당치즈만두(7개)", price: 2000 },
            { label: "중국당면", price: 2500 },
          ],
        },
        {
          name: "추가메뉴(떡)",
          type: "checkbox",
          values: [{ label: "떡 추가", price: 1000 }],
        },
        {
          name: "추가메뉴(토핑)",
          type: "checkbox",
          values: [
            { label: "모짜치즈", price: 3000 },
            { label: "콘마요", price: 2500 },
            { label: "햄(7개)", price: 1000 },
            { label: "베이컨", price: 3000 },
            { label: "계란(2개)", price: 1500 },
            { label: "메추리알(5개)", price: 1000 },
            { label: "우동사리", price: 2000 },
            { label: "당면사리", price: 2000 },
          ],
        },
        {
          name: "추가메뉴(사이드)",
          type: "checkbox",
          values: [
            { label: "감자채튀김", price: 2500 },
            { label: "엽기시즈닝(버터갈릭맛)", price: 300 },
            { label: "엽기오돌뼈밥", price: 4500 },
            { label: "참치마요밥", price: 3500 },
            { label: "주먹김밥(셀프)", price: 2000 },
            { label: "계란찜", price: 2000 },
            { label: "계란야채죽", price: 5000 },
            { label: "순대", price: 3000 },
            { label: "오뎅튀김(15개)", price: 2000 },
            { label: "모둠튀김", price: 2000 },
            { label: "만두(4개)", price: 2000 },
            { label: "김말이(3개)", price: 2000 },
            { label: "야채튀김(1개)", price: 1000 },
            { label: "꿔바로우(5개)", price: 5900 },
            { label: "엽봉(5개)", price: 5000 },
            { label: "바삭치즈만두(7개)", price: 2000 },
            { label: "엽도그(1개)", price: 2000 },
            { label: "공깃밥", price: 1000 },
            { label: "단무지(1개)", price: 500 },
          ],
        },
        {
          name: "추가메뉴(음/주류)",
          type: "checkbox",
          values: [{ label: "음료(유산균)(450ml)", price: 1000 }],
        },
      ],
    },
    {
      menuId: 9,
      menuName: "엽기 오돌뼈",
      price: 14000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EB%A9%94%EC%9D%B8_%EC%97%BD%EA%B8%B0%EC%98%A4%EB%8F%8C%EB%BC%88_1.jpg",
      options: [
        {
          name: "추가메뉴(토핑)",
          type: "checkbox",
          values: [
            { label: "모짜치즈", price: 3000 },
            { label: "콘마요", price: 2500 },
            { label: "햄(7개)", price: 1000 },
            { label: "베이컨", price: 3000 },
            { label: "계란(2개)", price: 1500 },
            { label: "메추리알(5개)", price: 1000 },
          ],
        },
        {
          name: "추가메뉴(사이드)",
          type: "checkbox",
          values: [
            { label: "감자채튀김", price: 2500 },
            { label: "엽기시즈닝(버터갈릭맛)", price: 300 },
            { label: "엽기오돌뼈밥", price: 4500 },
            { label: "참치마요밥", price: 3500 },
            { label: "주먹김밥(셀프)", price: 2000 },
            { label: "계란찜", price: 2000 },
            { label: "계란야채죽", price: 5000 },
            { label: "순대", price: 3000 },
            { label: "오뎅튀김(15개)", price: 2000 },
            { label: "모둠튀김", price: 2000 },
            { label: "만두(4개)", price: 2000 },
            { label: "김말이(3개)", price: 2000 },
            { label: "야채튀김(1개)", price: 1000 },
            { label: "꿔바로우(5개)", price: 5900 },
            { label: "엽봉(5개)", price: 5000 },
            { label: "바삭치즈만두(7개)", price: 2000 },
            { label: "엽도그(1개)", price: 2000 },
            { label: "공깃밥", price: 1000 },
            { label: "단무지(1개)", price: 500 },
          ],
        },
        {
          name: "추가메뉴(음/주류)",
          type: "checkbox",
          values: [{ label: "음료(유산균)(450ml)", price: 1000 }],
        },
      ],
    },
    {
      menuId: 10,
      menuName: "엽떡밀키트",
      price: 15000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EB%A9%94%EC%9D%B8_%EC%97%BD%EA%B8%B0%EB%AC%B4%EB%BC%88%EB%8B%AD%EB%B0%9C_1.jpg",
      options: [
        {
          name: "맛 선택(2개 이상)",
          type: "checkbox",
          values: [
            { label: "[엽기밀키트] 오리지널", price: 9000 },
            { label: "[엽기밀키트] 착한맛", price: 9000 },
            { label: "[로제밀키트] 오리지널", price: 11000 },
            { label: "[로제밀키트] 착한맛", price: 11000 },
          ],
        },
      ],
    },
    {
      menuId: 11,
      menuName: "감자채튀김",
      price: 2500,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EA%B0%90%EC%9E%90%EC%B1%84%ED%8A%80%EA%B9%80%20%EC%8B%9C%EC%A6%88%EB%8B%9D_1.jpg",
      options: [],
    },
    {
      menuId: 12,
      menuName: "엽기시즈닝(버터갈릭맛)",
      price: 300,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%97%BD%EA%B8%B0%EC%8B%9C%EC%A6%88%EB%8B%9D(%EB%B2%84%ED%84%B0%EA%B0%88%EB%A6%AD%EB%A7%9B)_1.jpg",
      options: [],
    },
    {
      menuId: 13,
      menuName: "엽기오돌뼈밥",
      price: 4500,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%97%BD%EA%B8%B0%EC%98%A4%EB%8F%8C%EB%BC%88%EB%B0%A5_1.jpg",
      options: [],
    },
    {
      menuId: 14,
      menuName: "참치마요밥",
      price: 3500,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%B0%B8%EC%B9%98%EB%A7%88%EC%9A%94%EB%B0%A5_1.jpg",
      options: [],
    },
    {
      menuId: 15,
      menuName: "주먹김밥(셀프)",
      price: 2000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%A3%BC%EB%A8%B9%EA%B9%80%EB%B0%A5(%EC%85%80%ED%94%84).jpg",
      options: [],
    },
    {
      menuId: 16,
      menuName: "계란찜",
      price: 2000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EA%B3%84%EB%9E%80%EC%B0%9C.jpg",
      options: [],
    },
    {
      menuId: 17,
      menuName: "계란야채죽",
      price: 5000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EA%B3%84%EB%9E%80%20%EC%95%BC%EC%B1%84%EC%A3%BD.jpg",
      options: [],
    },
    {
      menuId: 18,
      menuName: "순대",
      price: 3000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%88%9C%EB%8C%80.jpg",
      options: [],
    },
    {
      menuId: 19,
      menuName: "오뎅튀김(15개)",
      price: 2000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%98%A4%EB%8E%85%ED%8A%80%EA%B9%80.jpg",
      options: [],
    },
    {
      menuId: 20,
      menuName: "모둠튀김",
      price: 2000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EB%AA%A8%EB%91%A0%ED%8A%80%EA%B9%80.jpg",
      options: [],
    },
    {
      menuId: 21,
      menuName: "만두(4개)",
      price: 2000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EB%A7%8C%EB%91%90.jpg",
      options: [],
    },
    {
      menuId: 22,
      menuName: "김말이(3개)",
      price: 2000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EA%B9%80%EB%A7%90%EC%9D%B4.jpg",
      options: [],
    },
    {
      menuId: 23,
      menuName: "야채튀김(1개)",
      price: 1000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%95%BC%EC%B1%84%ED%8A%80%EA%B9%80.jpg",
      options: [],
    },
    {
      menuId: 24,
      menuName: "꿔바로우(5개)",
      price: 5900,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EA%BF%94%EB%B0%94%EB%A1%9C%EC%9A%B0.jpg",
      options: [],
    },
    {
      menuId: 25,
      menuName: "엽봉(5개)",
      price: 5000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%97%BD%EB%B4%89.jpg",
      options: [],
    },
    {
      menuId: 26,
      menuName: "바삭치즈만두(7개)",
      price: 2000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EB%B0%94%EC%82%AD%EC%B9%98%EC%A6%88%EB%A7%8C%EB%91%90.jpg",
      options: [],
    },
    {
      menuId: 27,
      menuName: "엽도그(1개)",
      price: 2000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%97%BD%EB%8F%84%EA%B7%B8.jpg",
      options: [],
    },
    {
      menuId: 28,
      menuName: "공깃밥",
      price: 1000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EA%B3%B5%EA%B9%83%EB%B0%A5.jpg",
      options: [],
    },
    {
      menuId: 29,
      menuName: "단무지(1개)",
      price: 500,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%BC%EB%B0%98%20%EC%82%AC%EC%9D%B4%EB%93%9C_%EA%B0%90%EC%9E%90%EC%B1%84%ED%8A%80%EA%B9%80%20%EC%8B%9C%EC%A6%88%EB%8B%9D.jpg",
      options: [],
    },
    {
      menuId: 30,
      menuName: "음료(유산균)",
      price: 1000,
      image:
        "https://www.yupdduk.com/bod/config/menu/%EC%9D%8C%EB%A3%8C(%EC%9C%A0%EC%82%B0%EA%B7%A0)_6_1_1_1_1_1_1.png",
      options: [],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(230, 230, 230)",
        height: "100vh",
      }}
    >
      <Header title="방문 포장" />
      <nav>
        <div className="storeName">
          <p>{storeInfo.storeName}</p>
        </div>
        <div className="storeInfo1">
          <div style={{ width: "120px", fontWeight: "400" }}>
            <p>· 주문방법</p>
            <p>· 최소주문</p>
            <p>· 위치안내</p>
          </div>
          <div style={{ fontWeight: "400" }}>
            <p style={{ color: "rgb(222, 29, 36)" }}>방문 포장</p>
            <p style={{ paddingLeft: "2px" }}>9,000원</p>
            <p>{storeInfo.address}</p>
          </div>
        </div>
      </nav>
      <main>
        <div className="mainMenu">
          <img
            src="https://www.yupdduk.com/bj-images/logo_m.png"
            alt=""
            className="logo"
          />
          <div className="MmenuWrapper">
            <h2
              style={{
                background:
                  "linear-gradient(to bottom, #FFFFFF 50%, rgb(255, 227, 227) 50%)",
              }}
            >
              메인메뉴
            </h2>
            {menuList.slice(0, 6).map((menu, index) => (
              <div
                key={menu.menuId}
                className="Mmenu"
                style={{
                  borderBottom:
                    index !== menuList.length - 1
                      ? "1px solid rgb(230, 230, 230)"
                      : "none",
                }}
              >
                <div>
                  <h3>{menu.menuName}</h3>
                  <p style={{ fontSize: "16px", fontWeight: "500" }}>
                    {menu.price.toLocaleString()}원
                  </p>
                </div>
                <img src={menu.image} alt={menu.menuName} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <div></div>
      </footer>
    </div>
  );
};

export default OrderPage2;
