package com.who.test.shared;

import com.google.gwt.user.client.rpc.SerializationException;
import com.google.gwt.user.client.rpc.SerializationStreamReader;
import com.google.gwt.user.client.rpc.SerializationStreamWriter;
import com.google.gwt.user.client.rpc.impl.ReflectionHelper;

@SuppressWarnings("deprecation")
public class TestsName_FieldSerializer implements com.google.gwt.user.client.rpc.impl.TypeHandler {
  private static native java.lang.String getSuiteName(com.who.test.shared.TestsName instance) /*-{
    return instance.@com.who.test.shared.TestsName::suiteName;
  }-*/;
  
  private static native void setSuiteName(com.who.test.shared.TestsName instance, java.lang.String value) 
  /*-{
    instance.@com.who.test.shared.TestsName::suiteName = value;
  }-*/;
  
  private static native java.util.List getTestName(com.who.test.shared.TestsName instance) /*-{
    return instance.@com.who.test.shared.TestsName::testName;
  }-*/;
  
  private static native void setTestName(com.who.test.shared.TestsName instance, java.util.List value) 
  /*-{
    instance.@com.who.test.shared.TestsName::testName = value;
  }-*/;
  
  public static void deserialize(SerializationStreamReader streamReader, com.who.test.shared.TestsName instance) throws SerializationException {
    setSuiteName(instance, streamReader.readString());
    setTestName(instance, (java.util.List) streamReader.readObject());
    
  }
  
  public static com.who.test.shared.TestsName instantiate(SerializationStreamReader streamReader) throws SerializationException {
    return new com.who.test.shared.TestsName();
  }
  
  public static void serialize(SerializationStreamWriter streamWriter, com.who.test.shared.TestsName instance) throws SerializationException {
    streamWriter.writeString(getSuiteName(instance));
    streamWriter.writeObject(getTestName(instance));
    
  }
  
  public Object create(SerializationStreamReader reader) throws SerializationException {
    return com.who.test.shared.TestsName_FieldSerializer.instantiate(reader);
  }
  
  public void deserial(SerializationStreamReader reader, Object object) throws SerializationException {
    com.who.test.shared.TestsName_FieldSerializer.deserialize(reader, (com.who.test.shared.TestsName)object);
  }
  
  public void serial(SerializationStreamWriter writer, Object object) throws SerializationException {
    com.who.test.shared.TestsName_FieldSerializer.serialize(writer, (com.who.test.shared.TestsName)object);
  }
  
}
