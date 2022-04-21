import styled from "styled-components";

const SBody = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: center;
`;

const SSide = styled.div``;

export const MyPage = () => {
  return (
    <SBody>
      <div>
        サイドメニュー
        <p>いいね！した商品</p>
        <p>閲覧履歴</p>
        <p>保存した検索条件</p>
        <h3>商品の管理</h3>
        <p>a</p>
        <p>b</p>
        <p>c</p>
        <h3>クーポン</h3>
        <p>a</p>
        <p>b</p>
        <p>c</p>
        <h3>売上・ポイント</h3>
        <p>a</p>
        <p>b</p>
        <p>c</p>
        <h3>ガイド・お問い合わせ</h3>
        <p>a</p>
        <p>b</p>
        <p>c</p>
        <h3>その他設定</h3>
        <p>a</p>
        <p>b</p>
        <p>c</p>
      </div>

      <div>
        <p>マイページ画面　アイコン　アカウント名　★　本人確認 　</p>
        <p>売上金　￥０ ポイント</p>
      </div>
    </SBody>
  );
};
