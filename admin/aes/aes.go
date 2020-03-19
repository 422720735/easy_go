package aes

//aes加密

import (
	"crypto/aes"
	"crypto/cipher"
	"encoding/base64"
	"encoding/json"
	"fmt"
)

type AesEncrypt struct {
}

func (this *AesEncrypt) getKey(strKey string) []byte {
	//strKey := "1234567890123456"
	keyLen := len(strKey)
	if keyLen < 16 {
		panic("res key 长度不能小于16")
	}
	arrKey := []byte(strKey)
	if keyLen >= 32 {
		//取前32个字节
		return arrKey[:32]
	}
	if keyLen >= 24 {
		//取前24个字节
		return arrKey[:24]
	}
	//取前16个字节
	return arrKey[:16]
}

//加密字符串
func (this *AesEncrypt) Encrypt(strKey, strMesg string) ([]byte, error) {
	key := this.getKey(strKey)
	fmt.Println("key", string(key))
	var iv = []byte(key)[:aes.BlockSize]
	fmt.Println("key", string(iv))
	encrypted := make([]byte, len(strMesg))
	aesBlockEncrypter, err := aes.NewCipher(key)
	if err != nil {
		return nil, err
	}
	aesEncrypter := cipher.NewCFBEncrypter(aesBlockEncrypter, iv)
	aesEncrypter.XORKeyStream(encrypted, []byte(strMesg))
	return encrypted, nil
}

//解密字符串
func (this *AesEncrypt) Decrypt(strKey string, src []byte) (strDesc []byte, err error) {
	defer func() {
		//错误处理
		if e := recover(); e != nil {
			err = e.(error)
		}
	}()
	key := this.getKey(strKey)
	var iv = []byte(key)[:aes.BlockSize]
	decrypted := make([]byte, len(src))
	var aesBlockDecrypter cipher.Block
	aesBlockDecrypter, err = aes.NewCipher([]byte(key))
	if err != nil {
		return nil, err
	}
	aesDecrypter := cipher.NewCFBDecrypter(aesBlockDecrypter, iv)
	aesDecrypter.XORKeyStream(decrypted, src)
	return decrypted, nil
}

/*
*加密一个验证码
 */
func (t *Token) Encrypt(aesKey string) (string, error) {
	key := aesKey
	enc := &aes.AesEncrypt{}
	buffer, err := json.Marshal(*t)
	if err != nil {
		return "", err
	}
	src, _ := enc.Encrypt(key, string(buffer))
	encodeString := base64.StdEncoding.EncodeToString(src)
	return encodeString, nil
}

/*
*解密一个验证码
 */
func (t *Token) Decrypt(src, aesKey string) error {
	decodeBytes, err := base64.StdEncoding.DecodeString(src)
	if err != nil {
		return err
	}
	key := aesKey
	enc := &aes.AesEncrypt{}
	dst, _ := enc.Decrypt(key, decodeBytes)
	e := json.Unmarshal(dst, t)
	if e != nil {
		return e
	}
	return nil
}
